describe('removeNonASCII()', function () {
    it('should remove non-ASCII characters', function () {
        const str = 'A \ud83d\ude00 B';
        assert.equal(removeNonASCII(str), 'A  B');
    });
    it('should not remove plain text', function () {
        const str = 'A B';
        assert.equal(removeNonASCII(str), 'A B');
    });
});
