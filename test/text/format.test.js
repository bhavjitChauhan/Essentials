describe('format()', function () {
    it('should format math expressions', function () {
        const str = '${1 + 1}';
        assert.equal(format(str), '2');
    });
    it('should execute global functions', function () {
        const str = '${Math.sqrt(4)}';
        assert.equal(format(str), '2');
    });
    it('should execute Processing functions', function () {
        const str = '${sqrt(4)}';
        assert.equal(format(str), '2');
    });
    it('should format multiple expressions', function () {
        const str = '${Math.sqrt(4)} ${sqrt(4)}';
        assert.equal(format(str), '2 2');
    });
    it('should format white retaining whitespace', function () {
        const str = '${Math.sqrt(4)} ${sqrt(4)}';
        assert.equal(format(str), '2 2');
    });
    it('should format with text', function () {
        const str = 'A ${Math.sqrt(4)} B';
        assert.equal(format(str), 'A 2 B');
    });
});
