# WideText Changelog

## 3.1

*2016-09-27*

Add a major improvement and breaking syntax changes:

Use any element, with the class `.widetext`. Or use a custom selector, matched in the options of `.wideText({options})`.


## 3

*2016-07-09*

v3 will add a major improvement and breaking syntax change:

Use

    <div class="widetext">text</div>

where previously you would have used

    <svg class="widetext"><text>text</text></svg>`

Supports any selector for the target wrapper. Default is `.widetext`.

The resulting markup in the above example will be

    <div class="widetext">
        <svg class="widetext_svg">
            <text class="widetext_text">
                text
            </text>
        </svg>
    </div>



## 2

*2016-07-09*

v2 introduces breaking changes, and introduces a more full-featured tool.

BREAKING CHANGE

WideText must now be run, e.g. with `wideText()`.


NEW FEATURES

To target `svg.customSelector`, run `wideText('.customSelector')` (WideText enforces targetting an svg).

You can pass an array of options like

	.wideText({
		leading: .5,
		align: 'right'
	})

Multiple instances are fine:

	.wideText();
	.wideText({
		selector: '.wideText.spaced-big',
		leading: 3
	})

The available options are

option	| default 		| possible values
---	 	| ---			| ---
selector	| '.wideText' 	| string
leading 	| .2 			| number (e.g. .2) or string (e.g. '.2' or '.2em')
align 	| left align 	| 'center' or 'right'


## 1.0.3

*2016-06-23*

Adds a font size to the svg (6px seems to produce the best end results)


## 1.0.2

*2016-06-23*

Adds Bower registry

Readme updates


## 1.0.1

*2016-06-23*

Makes the `svg` as wide as its relative container


## 1

*2016-06-23*

Initial release