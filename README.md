![Essentials Logo](https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true)
---

[GitHub Pages](https://bhavjitchauhan.github.io/Essentials) |
[Wiki](https://github.com/bhavjitChauhan/Essentials/wiki) |
[Khan Academy](https://www.khanacademy.org/profile/bhavjitChauhan/projects) |
[Builder](https://bhavjitchauhan.github.io/Essentials/builder.html)

[![](https://img.shields.io/github/package-json/v/bhavjitChauhan/Essentials?style=flat-square)](https://github.com/bhavjitChauhan/Essentials/releases)
[![](https://img.shields.io/github/last-commit/bhavjitChauhan/Essentials?style=flat-square)](https://github.com/bhavjitChauhan/Essentials/commits)
[![](https://data.jsdelivr.com/v1/package/gh/bhavjitChauhan/Essentials/badge)](https://www.jsdelivr.com/package/gh/bhavjitChauhan/Essentials?path=build)

The Essentials library provides utility functions for the [Khan Academy
Processing Environment](https://www.khanacademy.org/cs/new).

## Usage
In an existing or a [new program](https://www.khanacademy.org/cs/new) on Khan Academy, copy the code for the desired build type.

### CDN
Essentials is available for use by loading it externally via the jsDelivr CDN.

Use the following [JSHint directive](https://jshint.com/docs/) to allow the use
of otherwise restricted features.
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

### Khan Academy
Essentials is also available for use without using jsDelivr's CDN. Copy and paste the source code directly into your program using the [Essentials Builder](https://bhavjitchauhan.github.io/Essentials/builder.html) or from the [essentials-ka.js](https://github.com/bhavjitChauhan/Essentials/blob/master/build/essentials-ka.js) file in the repository.

See the project Wiki page on [Custom
Builds](https://github.com/bhavjitChauhan/Essentials/wiki/Custom-Builds) for
alternative builds.

## Why Essentials?
Khan Academy does not provide the equivalent of
[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
or [npm](https://www.npmjs.com/)
for their platform. Users are forced to either reinvent the wheel for themselves
or paste similar lines of code in each of their programs.

The Essentials library solves this issue by providing utility functions and
constants all packaged in an external file. It allows users to spend more time on their projects than working around Khan Academy's restrictions.

## Documentation
Documentation is available on [Github
Pages](https://bhavjitchauhan.github.io/Essentials), the project
[Wiki](https://github.com/bhavjitChauhan/Essentials/wiki/Documentation) or on
[Khan Academy](https://www.khanacademy.org/cs/-/6460530077679616).

## Credits
### Using
Project | Purpose
--- | ---
[jsDelivr](https://github.com/jsdelivr/jsdelivr) | CDN delivery
[Babel](https://github.com/babel/babel) | Generating KA builds
[Rollup](https://github.com/rollup/rollup) | Combining files
[jQuery](https://github.com/jquery/jquery) | Ajax
[Underscore.js](https://github.com/jashkenas/underscore) | Convenience

### Inspirations
 - [BMS](https://www.khanacademy.org/cs/-/6070976254115840)
 - [lodash](https://github.com/lodash/lodash)

Credit is given to authors of functions via links in the documentation on the [Wiki](https://github.com/bhavjitChauhan/Essentials/wiki/Documentation).

## License
The Essentials library may be freely distributed under the MIT license. See [LICENSE](LICENSE) for details.
