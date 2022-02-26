<br>
<p align="center">
    <a href="https://github.com/bhavjitChauhan/Essentials">
        <img src="https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true"
        alt="Logo"
        width="50%">
    </a>
</p>
<p align="center">
    The Khan Academy utility library.
    <br>
    <a href="https://bhavjitchauhan.github.io/Essentials/"><strong>Explore the docs »</strong></a>
</p>
<p align="center">
    <a href="https://github.com/bhavjitChauhan/Essentials/releases">
        <img src="https://img.shields.io/github/v/release/bhavjitChauhan/Essentials?style=flat-square" alt="Release">
    </a>
    <a href="https://cdn.jsdelivr.net/gh/bhavjitChauhan/Essentials@2/essentials.min.js">
        <img src="https://img.shields.io/badge/minified%20size-26.91%20kB-blue?style=flat-square" alt="Size">
    </a>
    <a href="https://github.com/bhavjitChauhan/Essentials/pulls">
        <img src="https://img.shields.io/github/issues-pr/bhavjitChauhan/Essentials?style=flat-square" alt="Pull Requests">
    </a>
    <a href="https://github.com/bhavjitChauhan/Essentials/commits">
        <img src="https://img.shields.io/github/last-commit/bhavjitChauhan/Essentials?style=flat-square" alt="Last Commit">
    </a>
    <a href="https://www.jsdelivr.com/package/gh/bhavjitChauhan/Essentials?path=build">
        <img src="https://data.jsdelivr.com/v1/package/gh/bhavjitChauhan/Essentials/badge" alt="jsDelivr">
    </a>
</p>
<hr>
<br>
<details open="open">
    <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#getting-started">Getting Started</a>
        </li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#documentation">Documentation</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
</details>

## About
The Essentials library delivers functionality, performance and pushes the limits of what is possible with Khan Academy's Processing.js environment. Essentials is a one-of-a-kind library designed to make the programming experience on Khan less about working around it's restrictions and more about transforming your ideas into reality.

### Why
Khan Academy doesn't offer an equivalent of modules, leaving it to programmers to reinvent the wheel for themselves even for the most trivial of tasks. Not to mention the [countless](https://khanacademy.org/cs/-/5836386270134272) [bugs](https://ka-hearth.learnerpages.com/posts/new-memory-leak) that Khan's port of Processing.js has been [riddled](https://github.com/Khan/live-editor/issues) with. Most of which, mind you, have been long patched on the original repository. Although most of these are completely irreparable, others have workarounds which are included with the library.

### Technologies
The Essentials library uses the following open-source projects:
 - [jsDelivr](https://www.jsdelivr.com/)
 - [Babel](https://babeljs.io/)
 - [Rollup](https://rollupjs.org/)
 - [Terser](https://terser.org/)

A list of all dependencies defined in [package.json](https://github.com/bhavjitChauhan/Essentials/blob/master/package.json) and [package-lock.json](https://github.com/bhavjitChauhan/Essentials/blob/master/package-lock.json) is available in the [Dependency graph](https://github.com/bhavjitChauhan/Essentials/network/dependencies).

## Getting Started
Create a [new program](https://www.khanacademy.org/cs/new/) on Khan Academy or use an existing project and paste the following boilerplate code:

```js
// jshint ignore: start
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@2/essentials.min.js',
    function() {
        // your code here
    }
);
```

See alternative methods in the [Integration](https://bhavjitchauhan.github.io/Essentials/tutorial-Integration) tutorial.

### Customize
The recommended method to generate any boilerplate code for the Essentials library is to use the [Builder](https://bhavjitchauhan.github.io/Essentials/tutorial-Builder). See other ways of reducing file sizes and load times in the [Customize](https://bhavjitchauhan.github.io/Essentials/tutorial-Customize) tutorial.

## Usage
After loading the Essentials library its functions and constants are defined in the global scope, they can be called directly.

For live examples, please refer the [Integration](https://bhavjitchauhan.github.io/Essentials/tutorial-Integration) tutorial.

## Documentation
Documentation is generated using JSDoc, using the BetterDocs theme and hosted on [GitHub Pages](https://bhavjitchauhan.github.io/Essentials).

## License
Distributed under the MIT License. See [LICENSE](https://github.com/bhavjitChauhan/Essentials/blob/master/LICENSE) for more information.

## Contact
 - [GitHub](https://github.com/bhavjitChauhan)
 - [Khan Academy](https://www.khanacademy.org/profile/bhavjitChauhan/projects)

## Acknowledgements
 - [30 seconds of code](https://www.30secondsofcode.org/js)
 - [Bob Lyon](https://www.khanacademy.org/profile/BobLyon/)
 - [lodash](https://github.com/lodash/lodash)
 - [Underscore.js](https://underscorejs.org/)
 - [BMS](https://www.khanacademy.org/cs/-/6070976254115840)

Credit is given to the original authors of functions via links in the [documentation](https://bhavjitchauhan.github.io/Essentials).
