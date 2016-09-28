/* WideText

   v3.1.1 - 2016-09-27
   
   https://github.com/olets/WideText
   Copyright (c) 2016 Henry Bley-Vroman (@olets)
   MIT License


 */

function wideText(args) {

    // set options
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

        // Determine targets
    var wtElems = document.querySelectorAll(args.selector);

    // For each target
    for (var i = 0; i < wtElems.length; ++i) {

        // Make an <svg> and a <text>, and check for inline options
        var wtElem = wtElems[i],
            svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            textElem = document.createElementNS("http://www.w3.org/2000/svg", "text"),
            align = wtElem.getAttribute('data-align') || args.align,
            leadingVal = wtElem.getAttribute('data-leading') || args.leading,
            dyVal = parseFloat(leadingVal, 10) + 1 + "em";

        // Move the target's contents into the <text>
        while (wtElem.firstChild)
            textElem.appendChild(wtElem.firstChild);

        // Apply alignment to the <text>
        if (align == 'center') {
            var anchor = 'middle'
        } else if (align == 'right')
            var anchor = 'end';
        if (anchor) textElem.setAttribute('text-anchor', anchor);
        // And give it the WideText class
        textElem.classList.add("wideText_text");

        // Put each row in a <tspan>
        var rowElems = textElem.querySelectorAll(args.row);
        for (j = 0; j < rowElems.length; j++) {
            var rowElem = rowElems[j],
                tspanElem = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            while (rowElem.firstChild)
                tspanElem.appendChild(rowElem.firstChild);

            // And place the <tspan>
            tspanElem.setAttribute('x', '0');
            tspanElem.setAttribute('dy', dyVal);

            // And put the <tspan>s in the <text>
            textElem.replaceChild(tspanElem, rowElem);
        }

        // Put the <text> in the <svg>
        svgElem.appendChild(textElem);

        // And apply default styles
        svgElem.style.width = "100%";
        svgElem.style.display = "block";
        svgElem.style["font-size"] = "6px";

        // And give it the WideText class
        svgElem.classList.add("wideText_svg");

        // Put the <svg> in the target
        wtElem.appendChild(svgElem);

        // Size the <svg> to fit the <text>
        var textBBox = textElem.getBBox();
        svgElem.setAttribute("viewBox", [textBBox.x, textBBox.y, textBBox.width, textBBox.height].join(' '));
    }
}
