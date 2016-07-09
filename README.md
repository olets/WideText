#WideText

v3

WideText easily makes the font size of one or several lines of text responsive  
It's like Nermal to [the wonderful] [BigText](https://github.com/zachleat/BigText)'s Garfield: younger and lighter.


Bonuses: Under 1k of vanilla js, runs just once on load (works on window resize events without rerunning)  
Drawback for some: won't work on IE < 8

###[Check out the demo!](http://codepen.io/henry/pen/beBQzJ)

##Useage

**Make text fully responsive simply by wrapping it in `.widetext` and running `wideText()`**  
The **Text** content will be as **Wide** as its containing `.widetext`… it'll be **WideText**!  


*Note there will likely be some horizontal space between the text content and the container, because the container will be sized to contain the largest possible character, from [ascender line to descender line](https://en.wikipedia.org/wiki/Typeface_anatomy#/media/File:Typographia.svg) and including room for [diacritics](https://en.wikipedia.org/wiki/Diacritic).*

###Basic example:

Markup:

	<div class="widetext">
	    minimal example
	</div>
	
Script:

	wideText(options);
	
Where `options` is optional.

###Multi-line example
Break the text into several lines by wrapping each line in a `<tspan>`  
The longest line will be the full width of the container,  
and all other lines will get the same font size as the longest.  
*Note: remove whitespace between `tspan`s or you'll get trailing and/or leading space

Markup:

	<div class="widetext" data-leading=".5em" data-align="center">
        <tspan>a full example</tspan><tspan>with multiple lines, alignment, and custom leading</tspan>
	</div>

##Options:

The available `options` are

Option	| Default 		| Possible values
---	 	| ---			| ---
selector	| `'.widetext'` 	| string
leading* 	| `.2` 			| em value as a string (e.g. `'.2'` or `'.2em'`). When passing it in js, this can be a string or a number (e.g. `.2`)
align 	| null 	| `'center'` or `'right'` — anything else will align left

\* *Note: this isn't line height, it's the space between successive lines of text.*
  
&nbsp;  

### Custom target element

To target `customSelector`, run `wideText('customSelector')`


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
		leading: 3
	})

### Data API

Use the data attributes `data-align` and `data-leading` to set options in the markup. Note that inline options will override options passed with `wideText()`.


**Align multiple lines of text with the `data-align` attribute**  
	
	<div class="widetext" data-align="left">
		<tspan>text</tspan><tspan>more text</tspan>
	</div>	

**Adjust the space between multiple lines with `data-leading`**

	<div class="widetext" data-leading=".2">
		<tspan>text</tspan><tspan>more text</tspan>
	</div>

&nbsp;  

--

###Acknowledgments
  
Thanks to Paul LeBeau ([@BigBadaboom](https://github.com/BigBadaboom)) for the method of resizing svg to fit the text content.
