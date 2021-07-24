
Essentials offers the means to exploit the Khan Academy environment and lift some of the restrictions in place.

- [Workarounds](#workarounds)
    - [JSHint](#jshint)
    - [BabyHint](#babyhint)
    - [Loop Protector](#loop_protector)
- [Modern Syntax](#modern_syntax)
- [Global Objects](#global_objects)
    - [Browser Console](#browser_console)
    - [Big Integers](#big_integers)
    - [JSON](#json)
- [Libraries](#libraries)
    - [jQuery](#jquery)
    - [Underscore](#underscore)
    - [Backbone](#backbone)
- [Banned Properties](#banned_properties)
- [Storage](#storage)

---

<h2 id="workarounds">Workarounds</h3>

The KA builds include the JSHint and BabyHint workarounds.

<h3 id="jshint">JSHint</h4>

Khan Academy employs JSHint to enforce a certain code style (i.e. semicolons). Using the `ignore` JSHint directive disabled this functionality:

```js
// jshint ignore: start
```

<h3 id="babyhint">BabyHint</h4>

BabyHint is a project made specifically for Khan Academy to "provide more helpful hints". BabyHint is also used to restrict the usage of certain keywords (i.e. `document`). BabyHint uses regular expressions to "parse" code which leads to it making incorrect assumptions. [Ben Burrill](https://khanacademy.org/cs/-/6623480075124736) originally found a method of completely disabling BabyHint using a certain regular expression:

```js
(/\/*/);
```

<h3 id="loop_protector">Loop Protector</h4>

To avoid programs from crashing the webpage, Khan Academy injects it's own code into loops that kill the program if it tries to call more than 1000 iterations. This is an understandable concern but more often than not comes into play when it's not needed. The `disableLoopProtector` function disables this functionality:

```js
disableLoopProtector();
```

<h2 id="modern_syntax">Modern Syntax</h3>

Although most of the major syntax changes introduces ES5 are impossible to use in a program, variable declarations are an exception. For the most part, however, Khan treats `var`, `let` and `const` as the same.
```js
// jshint ignore: start
let a = 0;
const b = 1;
```

<h2 id="global_objects">Global Objects</h3>

JavaScript includes [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) some of which are not accessible in the default Khan environment.

<h3 id="browser_console">Browser Console</h4>

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/console)

A more powerful alternative to the `println` function. The `console` object provides access to the browser's debugging console. The browser console can be opened with keyboard shortcuts:

|| Windows | macOS
--- | --- | ---
<abbr title="Chrome DevTools">[Chrome](https://developers.google.com/web/tools/chrome-devtools)</abbr> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>J</kbd>
<abbr title="Firefox Developer Tools">[Firefox](https://developer.mozilla.org/en-US/docs/Tools)</abbr> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>K</kbd>
<abbr title="Safari Developer Tools">[Safari](https://support.apple.com/en-ca/guide/safari-developer/dev073038698/mac)</abbr> || <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>C</kbd>
<abbr title="F12 Developer Tools">[Internet Explorer](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/hh968260(v=vs.85))</abbr> | <kbd>F12</kbd>

Microsoft Edge and Opera are both chromium-based browsers, refer to Chrome. Linux users should already know how to open the browser console.

#### Example
Given an object `obj`:
```js
const obj = {
    a: 1,
    b: 2
}
```
The traditional method of debugging in the KAPE environment is by calling the
`println` function:
```js
println(obj);
```
![Canvas Console output](https://i.ibb.co/zHKK9JQ/chrome-oqa-GDhp-G7m.png)

The output of `console.log` is more useful, especially with more complex
objects.

```js
console.log(obj);
```
![Chrome DevTools Console
output](https://i.ibb.co/DptxXFj/chrome-t-Gt-An-Rw-O7a.png)

```js
console.table(obj);
```
![Chrome DevTools Console
output](https://i.ibb.co/hHhZnZH/chrome-UCfvw-Ru1-AZ.png)

Google Chrome and Firefox both offer their own suite of developer tools; Chrome
offers
[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=devtools),
and Firefox has its [Developer Tools](https://developer.mozilla.org/en-US/docs/Tools).

#### Live Example
<script src="https://www.khanacademy.org/computer-programming/essentials-example-browser-console/5716490644832256/embed.js?editor=yes&buttons=yes&author=no&embed=yes"></script>

<h3 id="big_integers">Big Integers</h4>

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

A solution for working with large numbers. The `MAX_SAFE_INTEGER` in JavaScript is `2 ^ 53 - 1`, after which the results are inconsistent or wrong.

#### Live Example
<script src="https://www.khanacademy.org/computer-programming/essentials-example-big-integers/5576171899011072/embed.js?editor=yes&buttons=yes&author=no&embed=yes"></script>

<h3 id="json">JSON</h4>

[Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

A convenient solution when working with transferring data into and out of Khan Academy, specifically the [`parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) methods.

<h2 id="libraries">Libraries</h3>

The following libraries are dependencies for the Khan Academy website, there
are no additional wait times or boilerplate code to use them.

The only caveat being that Khan Academy doesn't use the latest version of these
libraries. Some "newer" features may be missing.

#### Live Example
<script src="https://www.khanacademy.org/computer-programming/essentials-example-preloaded-libraries/5087622709329920/embed.js?editor=yes&buttons=yes&author=no&embed=yes"></script>

<h3 id="jquery">jQuery</h4>

Version 2.1.1 |
[Website](https://jquery.com/) |
[Documentation](https://api.jquery.com/) |
[Source](https://github.com/jquery/jquery/tree/4dec426aa2a6cbabb1b064319ba7c272d594a688)

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers

<h3 id="underscore">Underscore</h4>

Version 1.4.4 |
[Documentation](https://cdn.rawgit.com/jashkenas/underscore/1.4.4/index.html) |
[Source](https://github.com/jashkenas/underscore/tree/484bdb43ec4a9dd6a40e60a2d25317bec7aeb43f)

Underscore is a JavaScript library that provides a whole mess of useful
functional programming helpers without extending any built-in objects.

<h3 id="backbone">Backbone</h4>

Version 1.0.0 |
[Documentation](https://cdn.rawgit.com/jashkenas/backbone/1.0.0/index.html) |
[Source](https://github.com/jashkenas/backbone/tree/699fe3271262043bb137bae97bd0003d6d193f27)

Backbone.js gives structure to web applications by providing models with
key-value binding and custom events, collections with a rich API of enumerable
functions views with declarative event handling and connects it all to your
existing API over a RESTful JSON interface.

<h2 id="banned_properties">Banned Properties</h3>

Using the [BabyHint workaround](#babyhint) allows direct access to the following APIs:
 - [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
 - [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)
 - [`location`](https://developer.mozilla.org/en-US/docs/Web/API/Location)
 - [`ownerDocument`](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument)

#### Live Example

<script src="https://www.khanacademy.org/computer-programming/essentials-example-babyhint-workaround/5997745303142400/embed.js?editor=yes&buttons=yes&author=no&embed=yes"></script>

<h2 id="storage">Storage</h3>

The Essentials library does not include a wrapper for the Storage API as it's straightforward. Both Local and Session storage work inside the Khan Academy environment although External Essentials includes the `isLocalStorageEnabled` and `isSessionStorageEnabled` functions to conduct sanity checks.

#### Live Example

<script src="https://www.khanacademy.org/computer-programming/essentials-example-local-storage/4842015170707456/embed.js?editor=yes&buttons=yes&author=yes&embed=yes"></script>
