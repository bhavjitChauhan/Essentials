if (typeof PJSCodeInjector != 'undefined')
    PJSCodeInjector.applyInstance = fn => function() {
        const args = Array.from(arguments);
        return Reflect.construct(fn, args);
    };
