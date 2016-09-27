/* WideText

   v3.1 - 2016-09-27
   
   https://github.com/olets/WideText
   Copyright (c) 2016 Henry Bley-Vroman (@olets)
   MIT License


 */

function wideText(args) {
  var defaults = {
    'selector': '.widetext',
    'leading': .2,
    'align': '',
    'row': 'tspan'
  }

  if (typeof args === "string")
    args = {
      'selector': args
    }
  if (typeof args !== "object")
    args = {};
  for (var option in defaults)
    if (!(option in args))
      args[option] = defaults[option];

    // Find all the targets of WideText
  var wtElems = document.querySelectorAll(args.selector);

  for (var i = 0; i < wtElems.length; ++i) {
    var wtElem = wtElems[i];

    // Add the WideText wrappers
    //
    // Build the `text` element
    var textElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // Wrap the target's contents in it
    while (wtElem.firstChild)// because there could be one or several children
      textElem.appendChild(wtElem.firstChild);
    textElem.classList.add("wideText_text");
    //
    // Build the `svg` element
    var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // wrap the `text` in it
    svgElem.appendChild(textElem);
    wtElem.appendChild(svgElem);
    svgElem.classList.add("wideText_svg");
    svgElem.style.width = "100%";
    svgElem.style.display = "block";
    svgElem.style["font-size"] = "6px";
    

    // if the target has data-align, apply that to the `text`
    var align = wtElem.getAttribute('data-align') || args.align;
    if (align == 'center') {
      var anchor = 'middle'
    } else if (align == 'right')
      var anchor = 'end';
    if (anchor) textElem.setAttribute('text-anchor', anchor);

    // if (args.row !== 'tspan') { // means tspans are unnecessarily replaced… but it keeps it from breaking when args.row is tspan!
      var rowElems = textElem.querySelectorAll(args.row);
      for (p = 0; p < rowElems.length; p++) {
        var rowElem = rowElems[p];
        var tspanElem = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspanElem.appendChild(rowElem.firstChild);
        textElem.replaceChild(tspanElem, rowElem);
      }
    // }

    // Put all `tspan`s on their own line and apply leading
    //
    //
    // Get all child `tspan`s
    var tspanElems = textElem.querySelectorAll('tspan');

    // For each of them
    for (m = 0; m < tspanElems.length; ++m) {
      var tspanElem = tspanElems[m];

      // set `x` to the left
      tspanElem.setAttribute('x', '0');

      // if the `svg.svgtext` has `data-leading`, use that as the leading;
      // otherwise default to a .2em leading
      // console.log('args.leading:' + args.leading);
      var leadingVal = wtElem.getAttribute('data-leading') || args.leading;
      var dyVal = parseFloat(leadingVal, 10) + 1 + "em";
      tspanElem.setAttribute('dy', dyVal);
    }
    
    // size the svg to fit the text
    //
    // get the `svg.svgtext text`s bounding box
    var textBBox = textElem.getBBox();
    // and update the `svg.svgtext`s viewBox to fit it to the text
    svgElem.setAttribute("viewBox", [textBBox.x, textBBox.y, textBBox.width, textBBox.height].join(' '));
  }
}
