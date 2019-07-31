# Essentials
JavaScript library for Khan Academy containing useful functions and variables. 

## Documentation
You can view the documentation for the library on [Github Pages](https://bhavjitchauhan.github.io/Essentials/index.html) or the project [Wiki](https://github.com/bhavjitChauhan/Essentials/wiki).

## Usage
The Essentials library was made for Khan Acadmey's unique Processing environment.

To use the library in your program, you will need something similar to the following lines of code.

First, we need to write out the following JSHint flag to enable what would otherwise be restricted functionality on Khan Academy.
```js
// jshint ignore: start
```

Next, we need to copy the `bootstrapper` function. You can view it's documentation [here](https://www.khanacademy.org/cs/i/6070976254115840).
```js
const bootstrapper = function(callback) {
    let doc = Object.constructor('return this.document')();
    let jsonp = doc[['createElement']]('script');
    doc.BMS_bootstrap_loader = function(data) {
        delete doc.BMS_bootstrap_loader; jsonp.parentNode.removeChild(jsonp);
        Object.constructor('importer_context', 'export_module', data.revision.code)(this, callback);
    }.bind(this);
    jsonp.setAttribute('src', 'https://www.khanacademy.org/api/labs/scratchpads/5522928629252096?callback=document.BMS_bootstrap_loader');
    doc.head.appendChild(jsonp);
};
```

We also need to declare the `__requirements__` object that contains all the modules we will be importing.
```js
const __requirements__ = {
    'Essentials': '#5219990839590912'
};
```

Finally, we call the `bootstrapper` function to import the Essentials library.
```js
bootstrapper({
    done: function(BMS, modules) {
        // Check if imported variables from Essentials library were defined globally
        if (typeof IMPORTED_ESSENTIALS == 'undefined') {
            console.error('Essentials library variables not defined, restarting program...');
            Program.restart();
        }
    }
});
```
> Note that due to an issue with BMS, sometimes globals are not defined so I've included a hacky workaround by restarting the program if globals are not defined

<details>
  <summary>Boilerplate code</summary>
  
  ```js
  // jshint ignore: start
  const bootstrapper = function(callback) {
      let doc = Object.constructor('return this.document')();
      let jsonp = doc[['createElement']]('script');
      doc.BMS_bootstrap_loader = function(data) {
          delete doc.BMS_bootstrap_loader; jsonp.parentNode.removeChild(jsonp);
          Object.constructor('importer_context', 'export_module', data.revision.code)(this, callback);
      }.bind(this);
      jsonp.setAttribute('src', 'https://www.khanacademy.org/api/labs/scratchpads/5522928629252096?callback=document.BMS_bootstrap_loader');
      doc.head.appendChild(jsonp);
  };
  const __requirements__ = {
      'Essentials': '#5219990839590912'
  };
  bootstrapper({
      done: function(BMS, modules) {
          // Check if imported variables from Essentials library were defined globally
          if (typeof IMPORTED_ESSENTIALS == 'undefined') {
              console.error('Essentials library variables not defined, restarting program...');
              Program.restart();
          }
      }
  });
  ```
  
</details>

## Built With
 - [Ben's Module System](https://www.khanacademy.org/cs/i/6070976254115840) - Module import/export system
 - [underscore.js](https://underscorejs.org) - Useful JavaScript library

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
