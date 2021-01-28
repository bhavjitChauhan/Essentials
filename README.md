![Essentials Logo](https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png)
---

[GitHub Pages](https://bhavjitchauhan.github.io/Essentials) |
[Wiki](https://github.com/bhavjitChauhan/Essentials/wiki) |
[Khan Academy](https://www.khanacademy.org/profile/bhavjitChauhan/projects)

[![](https://data.jsdelivr.com/v1/package/gh/bhavjitChauhan/Essentials/badge)](https://www.jsdelivr.com/package/gh/bhavjitChauhan/Essentials)

The Essentials library provides utility functions for the [Khan Academy
Processing Environment](https://www.khanacademy.org/cs/new).

## Usage
In a [New Program](https://www.khanacademy.org/cs/new):

Use the follwing [JSHint directive](https://jshint.com/docs/) to allow the use
of otherwise restricted features.
```js
// jshint ignore: start
```

Use [jQuery](https://jquery.com/)'s
[getScript](https://api.jquery.com/jQuery.getScript/) method to load the
library.
```js
$.ajaxSetup({ cache: true });
$.getScript('https://cdn.jsdelivr.net/gh/bhavjitChauhan/essentials@1/essentials.min.js',
    function() {
        // your code here
    }
);
```
See the project Wiki page on [Custom
Builds](https://github.com/bhavjitChauhan/Essentials/wiki/Custom-Builds) for
alternative builds.

## Why Essentials?
> A JavaScript library is a library of pre-written JavaScript that allows for
easier development of JavaScript-based applications.
*[Wikipedia](https://en.wikipedia.org/wiki/JavaScript_library)*

Khan Academy does not provide the equivalent of
[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
or [npm](https://www.npmjs.com/)
for their platform. Users are forced to either reinvent the wheel for themselves
or paste similar lines of code in each of their programs.

The Essentials library solves this issue by providing utility functions and
constants all packaged in an external file. It allows users to spend more time on their projects than working around Khan Academy's restrictions.

## Documentation
Documentation is availible on [Github
Pages](https://bhavjitchauhan.github.io/Essentials) or in the project
[Wiki](https://github.com/bhavjitChauhan/Essentials/wiki/Documentation).

## Credits
### Using
 - [jQuery](https://github.com/jquery/jquery)
 - [underscore.js](https://github.com/jashkenas/underscore)
 - [30 seconds of code](https://github.com/30-seconds/30-seconds-of-code)

### Inspirations
 - [BMS](https://www.khanacademy.org/cs/-/6070976254115840)
 - [lodash](https://github.com/lodash/lodash)

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
