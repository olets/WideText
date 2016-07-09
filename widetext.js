/* WideText

   v3 - 2016-07-09
   
   https://github.com/olets/WideText
   Copyright (c) 2016 Henry Bley-Vroman (@olets)
   MIT License

 */

function wideText(args) {
  var defaults = {
    'selector': '.widetext',
    'leading': .2,
    'align': ''
  }

  if (typeof args === "string")
    args = {
      'selector': args
    }
  if (typeof args !== "object")
    args = {};
  for (var i in defaults)
    if (!(i in args))
      args[i] = defaults[i];

  // Find all the targets of WideText
  var wtElems = document.querySelectorAll(args.selector);
  
  for (i = 0; i < wtElems.length; ++i) {
    var wtElem = wtElems[i];
    
    // Add the WideText markup
    var wrapped = '<svg class="widetext_svg"><text class="widetext_text">' + wtElem.innerHTML + '</text></svg>';
    wtElem.innerHTML = wrapped;

    // Find all the `svg.widetext`s
    var svgElems = document.querySelectorAll(args.selector + ' svg');

    // For each `svg.widetext`
    for (n = 0; n < svgElems.length; ++n) {
      var svgElem = svgElems[i];

      // set the `svg`s display styles
      svgElem.setAttribute('width', '100%');
      svgElem.setAttribute('display', 'block');
      svgElem.setAttribute('font-size', '6px');

      // get the child `text`
      var textElem = svgElem.querySelector('text');

      // if the `svg` has data-align, apply that to the `text`
      var align = wtElem.getAttribute('data-align') || args.align;
      if (align == 'center') {
        var anchor = 'middle'
      } else if (align == 'right')
        var anchor = 'end';
      if (anchor) textElem.setAttribute('text-anchor', anchor);

      // Put all `tspan`s on their own line and apply leading
      //
      //
      // Get all child `tspan`s
      var tspanElems = textElem.querySelectorAll('tspan'),
        n;

      // For each of them
      for (var m = 0; m < tspanElems.length; ++m) {
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
      // This solution is adapted, with many thanks, from Paul LeBeau
      //
      // get the `svg.svgtext text`s bounding box
      var textBBox = textElem.getBBox();
      // and update the `svg.svgtext`s viewBox to fit it to the text
      svgElem.setAttribute("viewBox", [textBBox.x, textBBox.y, textBBox.width, textBBox.height].join(' '));
    }

  }
}