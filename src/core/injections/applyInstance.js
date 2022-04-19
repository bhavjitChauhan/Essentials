if (typeof PJSCodeInjector != 'undefined')
    PJSCodeInjector.applyInstance = fn => (...args) => new fn(...args);
