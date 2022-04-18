PJSCodeInjector.applyInstance = fn => (...args) => new fn(...args);
