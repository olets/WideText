# WideText

v3.1.1

WideText easily makes the font size of one or several lines of text responsive  
It's like Nermal to [the wonderful] [BigText](https://github.com/zachleat/BigText)'s Garfield: younger and lighter.


Bonuses: Just barely more than 1k of vanilla js, runs just once on load (works on window resize events without rerunning)  
Drawback for some: won't work on IE < 8

### [Check out the demo!](http://codepen.io/henry/pen/beBQzJ)

## Useage

**Make text fully responsive simply by wrapping it in `.widetext` and running `wideText()`**  
The **Text** content will be as **Wide** as its container… it'll be **WideText**!  


*Note there will likely be some top and bottom space between the text content and the container, because the container will be sized to contain the largest possible character, from [ascender line to descender line](https://en.wikipedia.org/wiki/Typeface_anatomy#/media/File:Typographia.svg) and including room for [diacritics](https://en.wikipedia.org/wiki/Diacritic). See the [demo](http://codepen.io/henry/pen/beBQzJ) for a visual explanation.*

### Basic example:

Markup:

	<div class="widetext">
	    minimal example
	</div>
	
Script:

	wideText();
	

### Multi-line example
Break the text into several lines by wrapping each line in a `<tspan>`  
The longest line will be the full width of the container,  
and all other lines will get the same font size as the longest.  
**Note: remove whitespace between `tspan`s or you'll get trailing and/or leading space**

Markup:

	<div class="widetext">
        <tspan>multiple</tspan><tspan>lines</tspan>
	</div>

## Options:

The available options are

Option | Default | Attribute for inlining | Possible values
--- | --- | --- | --- |
selector	| `".widetext"` | not available | any valid `"selector"`, as a string
leading* | `.2` | `data-leading` | <p>An em value, whether or not `em` is provided.</p><p>**Inline:** as a string, with or without a unit (e.g. `".2"` or `".2em"`). </p> **Or in js:** string with or without units (e.g. `".2"` or `".2em"`) or a number (e.g. `.2`)
align | null | `data-align` | `"center"` or `"right"` — anything else will align left
row | `"tspan"` | not available | any valid `"element"` or `".class"`, as a string

\* *Note "leading" isn't line height, it's the space between successive lines of text.*


### Custom target

By default **WideText** targets all elements with `.widetext`. To target additional or different elements:

Markup:

    <widetextElement>responsive text</widetextElement>

    <div class="parentOfAnotherWideTextElement">
        <span>responsive text</span>
    </div>

    <yetAnotherWideTextElement>responsive text</yetAnotherWideTextElement>
    
Script:

    wideText("widetextElement"); // shorthand to target an element

    wideText(".parentOfAnotherWideTextElement span"); // shorthand for some other selector

    wideText({selector: "yetAnotherWideTextElement"});


### Custom options

You can pass an array of options like

	.wideText({
		leading: .5,
		align: 'right'
	})

Multiple instances are fine:

	.wideText();
	.wideText({
		selector: '.wideText_alternate',
		row: 'span'
	})

### Data API

Use the data attributes `data-align` and `data-leading` to set the `align` and `leading` options inline. Note that inline options will override options passed in `wideText()`.


**Align multiple lines of text with the `data-align` attribute**  
	
	<div class="widetext" data-align="left">
		<tspan>line 1</tspan><tspan>line 2</tspan>
	</div>	

**Adjust the space between multiple lines with `data-leading`**

	<div class="widetext" data-leading=".2">
		<tspan>line 1</tspan><tspan>line 2</tspan>
	</div>


## Restrictions

The classes `.wideText_svg` and `.wideText_text` are reserved, because after processing

	<div class="myWideText">
		<tspan>line 1</tspan><tspan>line 2</tspan>
	</div>

will be

	<div class="myWideText">
		<svg class="wideText_svg">
			<text class="wideText_text">
				<tspan>line 1</tspan><tspan>line 1</tspan>
			</text>
		</svg>
	</div>

&nbsp;  

--

### Acknowledgments
  
Thanks to [@BigBadaboom](https://github.com/BigBadaboom) and [@dannyjhonston](https://github.com/dannyjhonston) for their help.