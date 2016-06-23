#WideText

WideText easily makes the font size of one or several lines of text responsive
It's is like Nermal to [the wonderful] [BigText](https://github.com/zachleat/BigText)'s Garfield: younger and lighter.

Bonuses: under 800b of js, no dependencies, doesn't rerun on window resize events
Drawback for some: won't work on IE < 8

[Check out the pen demo!](http://codepen.io/henry/pen/beBQzJ)

##Useage

**Make text fully responsive simply by wrapping it in `svg.widetext text`**
The **Text** content will be as **Wide** as the full width of the `svg`'s relative container… it'll be **WideText**! The `svg` will be sized to fit the text content.

*Note there will likely be some bordering space between the text content and the `svg`, because the `svg` will be sized to contain the largest possible character, from [ascender line to descender line](https://en.wikipedia.org/wiki/Typeface_anatomy#/media/File:Typographia.svg) and including room for [diacritics](https://en.wikipedia.org/wiki/Diacritic).*

**Center- or right-align the text by adding the `data-align` attribute to the `svg`**
Takes "center" or "right"

**Break the text into several lines by wrapping each line in a `tspan`**
All lines will be the same font size,
and the longest line will be the full width of the `svg`.
*Note: remove whitespace between `tspan`s or you'll get trailing and/or leading space*

**Adjust the space between lines of text by adding `data-leading` to the `svg`**
Takes em values; including the "em" unit is optional (either .2 or .2em will work)
*Note: this isn't line height, it's the space added above each line of text except the first*

##Examples:

**Minimal**

	<svg class="widetext">
	  <text>
	    minimal example
	  </text>
	</svg>

**Full**

	<svg class="widetext" data-leading=".5em" data-align="center">
	    <text>
	        <tspan>a full example</tspan><tspan>with multiple lines, alignment, and leading</tspan>
	    </text>
	</svg>


--
  
###Acknowledgments
Thanks to Paul LeBeau for the method of resizing svg to fit the text content.