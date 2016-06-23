/* WideText

   v1.0.1 - 2016-06-23
   
   https://github.com/olets/WideText
   Copyright (c) 2016 Henry Bley-Vroman (@olets)
   MIT License

 */


// Find all the `svg.widetext`s
var svgElems = document.querySelectorAll('svg.widetext'), i;

// For each `svg.widetext`
for (i = 0; i < svgElems.length; ++i) {
  var svgElem = svgElems[i];
  
  // set the `svg`s display styles
  svgElem.setAttribute('width','100%');
  svgElem.setAttribute('display','block');

  // get the child `text`
  var textElem = svgElem.querySelector('text');
  
  // if the `svg` has data-align, apply that to the `text`
  var align = svgElem.getAttribute('data-align');
  if (align == 'center') {
    var anchor = 'middle'
  } else if (align == 'right') {
    var anchor = 'end'
  }
  if (anchor) {
    textElem.setAttribute('text-anchor',anchor)
  }

  // Put all `tspan`s on their own line and apply leading
  //
  //
  // Get all child `tspan`s
  var tspanElems = textElem.querySelectorAll('tspan'), i;
  
  // For each of them
  for (n = 0; n < tspanElems.length; ++n) {
    var tspanElem = tspanElems[n];

    // set `x` to the left
    tspanElem.setAttribute('x', '0');

    // if the `svg.svgtext` has `data-leading`, use that as the leading;
    // otherwise default to a .2em leading
    var leadingVal = svgElem.getAttribute('data-leading') || '.2';
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