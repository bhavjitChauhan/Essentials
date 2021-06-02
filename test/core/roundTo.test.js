describe('roundTo()', function () {
    it('should correctly round integers', function () {
        const n = 123456789;
        assert.equal(roundTo(n, 1e3), 123_457_000);
    });
    it('should correctly round floats', function () {
        assert.equal(roundTo(Math.E, 1e-3), 2.718);
    });
});
