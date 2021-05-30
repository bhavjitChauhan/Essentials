describe('formatNumber()', function () {
    it('should correctly format numbers', function () {
        const n = 1_000;
        assert.equal(formatNumber(n), '1,000');
    });
    it('should not format numbers less than 1000', function () {
        const n = 999;
        assert.equal(formatNumber(n), '999');
    });
    it('should correctly format floats', function () {
        const n = 1234.56789;
        assert.equal(formatNumber(n, 'en', { minimumFractionDigits: 5 }), '1,234.56789');
    });
    // it('should correctly format other locales', function () {
    //     const n = 1_000;
    //     assert.equal(formatNumber(n, 'uk'), '1 000');
    // });
});
