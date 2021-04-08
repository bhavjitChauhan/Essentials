describe('randomInt()', function () {
    it('should return number within the given range', function () {
        const arr = [];
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < 100; i++) {
            const n = randomInt(100);
            arr.push(n);
            if (n < min) min = n;
            if (n > max) max = n;
        }

        assert.isAtLeast(min, 0);
        assert.isAtMost(max, 100);

        const average = arr.reduce((prev, curr) => prev + curr) / arr.length;
        assert.isAbove(average, 40);
        assert.isBelow(average, 60);
    });
    it('should handle negative ranges', function () {
        const arr = [];
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < 100; i++) {
            const n = randomInt(-100, 0);
            arr.push(n);
            if (n < min) min = n;
            if (n > max) max = n;
        }
        assert.isAtLeast(min, -100);
        assert.isAtMost(max, 0);

        const average = arr.reduce((prev, curr) => prev + curr) / arr.length;
        assert.isAbove(average, -60);
        assert.isBelow(average, -40);
    });
    it('should handle inverted ranges', function () {
        const arr = [];
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < 100; i++) {
            const n = randomInt(50, -50);
            arr.push(n);
            if (n < min) min = n;
            if (n > max) max = n;
        }
        assert.isAtLeast(min, -50);
        assert.isAtMost(max, 50);
        
        const average = arr.reduce((prev, curr) => prev + curr) / arr.length;
        assert.isAbove(average, -10);
        assert.isBelow(average, 10);
    });
});
