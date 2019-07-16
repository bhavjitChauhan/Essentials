## Modules

<dl>
<dt><a href="#module_centeredObjectText">centeredObjectText</a></dt>
<dd></dd>
<dt><a href="#module_highlightText">highlightText</a></dt>
<dd></dd>
<dt><a href="#module_lightOrDarkText">lightOrDarkText</a></dt>
<dd></dd>
<dt><a href="#module_multicoloredText">multicoloredText</a></dt>
<dd></dd>
<dt><a href="#module_outlineText">outlineText</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#colors">colors</a> : <code>object</code></dt>
<dd><p>Object containing basic color values</p>
</dd>
<dt><a href="#fonts">fonts</a> : <code>object</code></dt>
<dd><p>Object containing basic fonts</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#assert">assert(condition, [message])</a></dt>
<dd><p>Checks if condition passes is true or false</p>
</dd>
<dt><a href="#attempt">attempt(fn)</a></dt>
<dd><p>Tries to invoke function with arguments</p>
</dd>
<dt><a href="#chainAsync">chainAsync(fns)</a></dt>
<dd><p>Runs multiple functions asynchronously</p>
</dd>
<dt><a href="#clean">clean(fn)</a> ⇒ <code>function</code></dt>
<dd><p>Removes Khan Academy&#39;s loop protection from functions</p>
</dd>
<dt><a href="#copyToClipboard">copyToClipboard(data)</a></dt>
<dd><p>Copies data to clipboard</p>
</dd>
<dt><a href="#formatDuration">formatDuration(ms)</a> ⇒ <code>string</code></dt>
<dd><p>Converts milliseconds to readable format</p>
</dd>
<dt><a href="#hertz">hertz(fn, [iterations])</a> ⇒ <code>number</code></dt>
<dd><p>Calculates number of times function can run per second</p>
</dd>
<dt><a href="#inherit">inherit(subClass, superClass)</a></dt>
<dd><p>Efficiently inherts properties from parent class to child class</p>
</dd>
<dt><a href="#mostPerformant">mostPerformant(fns, [iterations])</a> ⇒ <code>Object</code></dt>
<dd><p>Calculates fastest function</p>
</dd>
<dt><a href="#noop">noop()</a></dt>
<dd><p>Literally does nothing</p>
</dd>
<dt><a href="#pop">pop()</a></dt>
<dd><p>Equivalent to using <a href="http://processingjs.org/reference/popMatrix_/">popMatrix</a> and <a href="http://processingjs.org/reference/popStyle_/">popStyle</a></p>
</dd>
<dt><a href="#printHTML">printHTML(data)</a></dt>
<dd><p>Prints HTML to canvas console</p>
</dd>
<dt><a href="#push">push()</a></dt>
<dd><p>Equivalent to using <a href="http://processingjs.org/reference/pushMatrix_/">pushMatrix</a> and <a href="http://processingjs.org/reference/pushStyle_/">pushStyle</a></p>
</dd>
</dl>

<a name="module_centeredObjectText"></a>

## centeredObjectText
<a name="module_centeredObjectText..centeredObjectText"></a>

### centeredObjectText~centeredObjectText(object, [margin]) ⇒ <code>string</code>
Returns string containing object values centered in a readable format

**Kind**: inner method of [<code>centeredObjectText</code>](#module_centeredObjectText)  
**Returns**: <code>string</code> - Formatted object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>object</code> |  | Object to be formatted |
| [margin] | <code>number</code> | <code>&#x27;length of longest string&#x27;</code> | Minimum number of characters per line |

<a name="module_highlightText"></a>

## highlightText
<a name="module_highlightText..highlightText"></a>

### highlightText~highlightText(string, [x], [y], [highlightColor])
Draws a string with a rectangle in the background, as if it were highlighted

**Kind**: inner method of [<code>highlightText</code>](#module_highlightText)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | String to be highlighted |
| [x] | <code>number</code> | <code>0</code> | x coordinate value |
| [y] | <code>number</code> | <code>&#x27;text height&#x27;</code> | y coordinate value |
| [highlightColor] | <code>number</code> | <code>&#x27;yellow&#x27;</code> | Color of highlight background |

<a name="module_lightOrDarkText"></a>

## lightOrDarkText
<a name="module_lightOrDarkText..lightOrDarkText"></a>

### lightOrDarkText~lightOrDarkText(backgroundColor) ⇒ <code>number</code>
Determines if text should be black or white based on background color

**Kind**: inner method of [<code>lightOrDarkText</code>](#module_lightOrDarkText)  
**Returns**: <code>number</code> - Color of text  

| Param | Type | Description |
| --- | --- | --- |
| backgroundColor | <code>number</code> | Color of background |

<a name="module_multicoloredText"></a>

## multicoloredText
<a name="module_multicoloredText..multicoloredText"></a>

### multicoloredText~multicoloredText(string, [x], [y])
Displays a string with multiple colors that are passed in using special syntax

**Kind**: inner method of [<code>multicoloredText</code>](#module_multicoloredText)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | Input string |
| [x] | <code>number</code> | <code>0</code> | x coordintate value |
| [y] | <code>number</code> | <code>&#x27;text height&#x27;</code> | y coordinate value |

<a name="module_outlineText"></a>

## outlineText
<a name="module_outlineText..outlineText"></a>

### outlineText~outlineText(string, [x], [y], [outlineColor])
Draws a string with an outline

**Kind**: inner method of [<code>outlineText</code>](#module_outlineText)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | String to be outlined |
| [x] | <code>number</code> | <code>0</code> | x coordinate value |
| [y] | <code>number</code> | <code>&#x27;text height&#x27;</code> | y coordinate value |
| [outlineColor] | <code>number</code> | <code>0</code> | Color of outline |

<a name="colors"></a>

## colors : <code>object</code>
Object containing basic color values

**Kind**: global constant  
<a name="fonts"></a>

## fonts : <code>object</code>
Object containing basic fonts

**Kind**: global constant  
<a name="assert"></a>

## assert(condition, [message])
Checks if condition passes is true or false

**Kind**: global function  
**Throws**:

- Will throw error is assertion is false


| Param | Type | Description |
| --- | --- | --- |
| condition | <code>boolean</code> | Condition to be tested |
| [message] | <code>string</code> | Error message to be thrown |

<a name="attempt"></a>

## attempt(fn)
Tries to invoke function with arguments

**Kind**: global function  
**Link**: https://github.com/30-seconds/30-seconds-of-code#attempt  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be invoked |

<a name="chainAsync"></a>

## chainAsync(fns)
Runs multiple functions asynchronously

**Kind**: global function  
**Link**: https://github.com/30-seconds/30-seconds-of-code#chainasync  

| Param | Type | Description |
| --- | --- | --- |
| fns | <code>array</code> | Contains functions |

<a name="clean"></a>

## clean(fn) ⇒ <code>function</code>
Removes Khan Academy's loop protection from functions

**Kind**: global function  
**Returns**: <code>function</code> - Cleaned function  
**Link**: https://khanacademy.org/cs/i/5594326276014080  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be cleaned |

<a name="copyToClipboard"></a>

## copyToClipboard(data)
Copies data to clipboard

**Kind**: global function  
**Todo**

- [ ] Fix issue where canvas is shifted up when function is called


| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Data to be copied |

<a name="formatDuration"></a>

## formatDuration(ms) ⇒ <code>string</code>
Converts milliseconds to readable format

**Kind**: global function  
**Returns**: <code>string</code> - Readable format of duration  
**Link**: https://github.com/30-seconds/30-seconds-of-code#attempt  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>number</code> | Duration in milliseconds |

<a name="hertz"></a>

## hertz(fn, [iterations]) ⇒ <code>number</code>
Calculates number of times function can run per second

**Kind**: global function  
**Returns**: <code>number</code> - Function performance in hertz - cycles per second  
**Link**: https://github.com/30-seconds/30-seconds-of-code#hz  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Function to be measured |
| [iterations] | <code>number</code> | <code>1e4</code> | Number of times function should be invoked |

<a name="inherit"></a>

## inherit(subClass, superClass)
Efficiently inherts properties from parent class to child class

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| subClass | <code>function</code> | Class to be inherited to |
| superClass | <code>function</code> | Class to inherit from |

<a name="mostPerformant"></a>

## mostPerformant(fns, [iterations]) ⇒ <code>Object</code>
Calculates fastest function

**Kind**: global function  
**Returns**: <code>Object</code> - Index of function which performed fastest and times recorded  
**Link**: https://github.com/30-seconds/30-seconds-of-code#mostperformant  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fns | <code>array</code> |  | Funtions to be compared |
| [iterations] | <code>number</code> | <code>1e4</code> | Number of times function should be invoked |

<a name="noop"></a>

## noop()
Literally does nothing

**Kind**: global function  
<a name="pop"></a>

## pop()
Equivalent to using [popMatrix](http://processingjs.org/reference/popMatrix_/) and [popStyle](http://processingjs.org/reference/popStyle_/)

**Kind**: global function  
**See**: push  
**Example**  
```js
push();stroke(255);rotate(90);rect(10, 10, 15, 15);pop();// This rectangle will not display the stroke or rotationrect(10, 10, 15, 15);
```
<a name="printHTML"></a>

## printHTML(data)
Prints HTML to canvas console

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Text to be printed to canvas console |

<a name="push"></a>

## push()
Equivalent to using [pushMatrix](http://processingjs.org/reference/pushMatrix_/) and [pushStyle](http://processingjs.org/reference/pushStyle_/)

**Kind**: global function  
**See**: pop  
**Example**  
```js
push();stroke(255);rotate(90);rect(10, 10, 15, 15);pop();// This rectangle will not display the stroke or rotationrect(10, 10, 15, 15);
```
