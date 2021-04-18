describe('obfuscate()', function () {
    it('should obfuscate plain text', function () {
        const str = 'Hello World';
        assert.equal(obfuscate(str), '\\x48\\x65\\x6c\\x6c\\x6f\\x20\\x57\\x6f\\x72\\x6c\\x64');
    });
    it('should obfuscate non-ASCII text', function () {
        const str = '\ud83d\ude00';
        assert.equal(obfuscate(str), '\\ud83d\\ude00');
    });
});
