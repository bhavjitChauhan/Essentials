describe('isInteger()', function () {
    it('should return true for positive integers', function () {
        const n = 123;
        assert.isTrue(isInteger(n));
    });
    it('should return true for negative integers', function () {
        const n = -123;
        assert.isTrue(isInteger(n));
    });
    it('should return true for zero', function () {
        const n = 0;
        assert.isTrue(isInteger(n));
    });
    it('should return false for positive floats', function () {
        const n = 123.456;
        assert.isFalse(isInteger(n));
    });
    it('should return false for negative floats', function () {
        const n = -123.456;
        assert.isFalse(isInteger(n));
    });
    it('should return false for strings', function () {
        const n = '123';
        assert.isFalse(isInteger(n));
    });
});
