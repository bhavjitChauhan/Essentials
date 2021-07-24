- [Standard](#standard)
    - [Draw Loop](#draw_loop)
- [Alternative](#alternative)
- [Khan Academy Builds](#khan_academy_builds)

---

<h2 id="standard">Standard</h2>

To get Essentials up and running, copy the boilerplate provided in the [README](https://github.com/bhavjitChauhan/Essentials/blob/master/README.md):
```js
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@2/essentials.min.js',
    function() {
        // your code here
    }
);
```

Alternatively, code can be stored in a `main` function which is called when the library is loaded:
```js
function main() {
    // your code here
}
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@2/essentials.min.js', main);
```

<h3 id="draw_loop">Draw Loop</h3>

To use Essentials with a program that utilizes the draw loop, a `main` function is suggested.

```js
function main() {
   // your code here
}
```

In the `getScript` method, set the `draw` variable to the `main` function.

```js
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@1/essentials.min.js',
    function() {
        draw = main;
    }
);
```

### Live Example

<script src="https://www.khanacademy.org/computer-programming/essentials-example-draw-function/6197911349575680/embed.js?editor=yes&buttons=yes&author=yes&embed=yes"></script>

<h2 id="alternative">Alternative</h2>

For an easier and simpler approach to integrating the Essentials library with pre-existing code, the following approach can be used.

```js
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@1/essentials.min.js',
    function() {
        if (!_core_initialized_) Program.restart();
    }
);

// your code here
```

#### Live Example

<script src="https://www.khanacademy.org/computer-programming/essentials-example-alternative-integration/4787689963864064/embed.js?editor=yes&buttons=yes&author=yes&embed=yes"></script>

This approach is not recommended as it might fall into a continuous feedback loop if Khan Academy disables this functionality, the jsDelivr service goes down, or a problem with Essentials arises.

<h2 id="khan_academy_builds">Khan Academy Builds</h2>

To use the local builds simply copy the code directly from the [Builder](https://bhavjitchauhan.github.io/Essentials/tutorial-Builder).
