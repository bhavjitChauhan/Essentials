[![Version][version-shield]][version-url]
[![Size][size-shield]][size-url]
[![Pull Requests][pr-shield]][pr-url]
[![Last Commit][commit-shield]][commit-url]
[![jsDelivr][jsdelivr-shield]][jsdelivr-url]

<br>
<p align="center">
    <a href="https://github.com/bhavjitChauhan/Essentials">
        <img src="https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true"
          alt="Logo"
          height="50">
    </a>
</p>
<p align="center">
    The Khan Academy utility library.
    <br>
    <a href="https://bhavjitchauhan.github.io/Essentials/"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    <a href="https://github.com/bhavjitChauhan/Essentials/wiki/">Wiki</a>
    &#183;
    <a href="https://bhavjitchauhan.github.io/Essentials/builder">Builder</a>
    &#183;
    <a href="https://github.com/bhavjitChauhan/Essentials/projects/1">Roadmap</a>
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
            <ul>
                <li><a href="#builder">Builder</a></li>
                <li><a href="#content-delivery-network">Content Delivery Network</a></li>
                <li><a href="#khan-academy">Khan Academy</a></li>
                <li><a href="#custom-builds">Custom Builds</a></li>
            </ul>
        </li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#documentation">Documentation</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
</details>

## About
The Essentials library provides utility functions for the [Khan Academy
Processing Environment](https://www.khanacademy.org/cs/new).

Khan Academy does not provide the equivalent of
[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
or [npm](https://www.npmjs.com/)
for their platform. Users are forced to either reinvent the wheel for themselves
or rewrite code in each of their programs.

The Essentials library solves this issue by providing utility functions and
constants all packaged in an external file. It allows users to spend more time on their projects than working around Khan Academy's restrictions.

### Built With
The Essentials library uses the following open-source projects:
 - [jsDelivr](https://www.jsdelivr.com/)
 - [Babel](https://babeljs.io/)
 - [Rollup](https://rollupjs.org/)
 - [Terser](https://terser.org/)

A list of all dependencies defined in [package.json](https://github.com/bhavjitChauhan/Essentials/blob/master/package.json) and [package-lock.json](https://github.com/bhavjitChauhan/Essentials/blob/master/package-lock.json) is availible in the [Dependency graph](https://github.com/bhavjitChauhan/Essentials/network/dependencies).

## Getting Started
Create a [new program](https://www.khanacademy.org/cs/new/) on Khan Academy or use an existing project.

### Builder
The recommended method to generate any boilerplate code for the Essentials library is to use the [Essentials Builder](https://bhavjitchauhan.github.io/Essentials/builder). Usage information is available on the web application itself.

### Content Delivery Network
Essentials is available via the jsDelivr CDN. This option does not increase your program size on Khan Academy at the expense of a slight increase in load times.

Use the following [JSHint directive](https://jshint.com/docs/) to allow the use
of otherwise restricted functionality. See the project Wiki on [Khan Academy and JSHint](https://github.com/bhavjitChauhan/Essentials/wiki/Khan-Academy-and-JSHint) for more information.
```js
// jshint ignore: start
```

Use [jQuery](https://jquery.com/)'s
[`getScript`](https://api.jquery.com/jQuery.getScript/) method to load the
library.
```js
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@1/essentials.min.js',
    function() {
        // your code here
    }
);
```

See alternative integration methods on the project Wiki page on [Usage](https://github.com/bhavjitChauhan/Essentials/wiki/Usage).

### Khan Academy
Essentials is also available locally via the KA build. This code will run as fast as any Khan Academy code. It is recommended to use the [Essentials Builder](#builder) to generate the boilerplate code.

Wrapping the Essentials library code in `// {` and `// }` allows you to fold the code into one line for aesthetic purposes.

### Custom Builds
See the project Wiki page on [Custom
Builds](https://github.com/bhavjitChauhan/Essentials/wiki/Custom-Builds) for customization options to reduce size.

## Usage
After loading the Essentials library its functions and constants are defined in the global scope, they can be called directly.

For live examples, please refer to the project Wiki page on [Usage](https://github.com/bhavjitChauhan/Essentials/wiki/Usage).

## Documentation
Documentation is available on:
 - [Github Pages](https://bhavjitchauhan.github.io/Essentials)
 - [Wiki](https://github.com/bhavjitChauhan/Essentials/wiki/Documentation)
 - [Khan Academy](https://www.khanacademy.org/cs/-/6460530077679616)

## Roadmap
See the [Features](https://github.com/bhavjitChauhan/Essentials/projects/1) project on GitHub for planned features.

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

Credit is given to the original authors of functions via links on the documentation on the project [Wiki](https://github.com/bhavjitChauhan/Essentials/wiki/Documentation).

[version-shield]: https://img.shields.io/github/package-json/v/bhavjitChauhan/Essentials?style=flat-square
[version-url]: https://github.com/bhavjitChauhan/Essentials/releases
[size-shield]: https://img.shields.io/badge/minified%20size-21.19%20kB-blue?style=flat-square
[size-url]: https://cdn.jsdelivr.net/gh/bhavjitChauhan/Essentials@1/essentials.min.js
[pr-shield]: https://img.shields.io/github/issues-pr/bhavjitChauhan/Essentials?style=flat-square
[pr-url]: https://github.com/bhavjitChauhan/Essentials/pulls
[commit-shield]: https://img.shields.io/github/last-commit/bhavjitChauhan/Essentials?style=flat-square
[commit-url]: https://github.com/bhavjitChauhan/Essentials/commits
[jsdelivr-shield]: https://data.jsdelivr.com/v1/package/gh/bhavjitChauhan/Essentials/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/gh/bhavjitChauhan/Essentials?path=build
