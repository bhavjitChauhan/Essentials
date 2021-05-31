describe('mostPerformant()', function () {
    it('should return the index of the most performant function given 2 functions', function () {
        const testees = {
            A: noop,
            B: () => {
                for (let i = 0; i < 1e1; i++) {
                    noop();
                }
            }
        };
        const result = mostPerformant(Object.values(testees));
        assert.equal(result, 0);
    });
    it('should return the index of the most performant function given 3 functions', function () {
        const testees = {
            A: () => {
                for (let i = 0; i < 1e1; i++) {
                    noop();
                }
            },
            B: () => {
                for (let i = 0; i < 1e1; i++) {
                    noop();
                }
            },
            C: noop
        };
        const result = mostPerformant(Object.values(testees));
        assert.equal(result, 2);
    });
    it('should throw an error given an arguments that is not a function', function () {
        const testees = {
            A: noop,
            B: 'noop'
        };
        assert.throws(() => {
            mostPerformant(Object.values(testees));
        }, TypeError);
    });
    it('should return a valid timings', function () {
        const testees = {
            A: () => {
                for (let i = 0; i < 1e1; i++) {
                    noop();
                }
            },
            B: () => {
                for (let i = 0; i < 1e1; i++) {
                    noop();
                }
            }
        };
        const results = mostPerformant(Object.values(testees), 1, true);
        assert.isTrue(Array.isArray(results));
        assert.isTrue(results.every(i => !isNaN(i)));
        assert.equal(results.length, Object.entries(testees).length);
    });
});
