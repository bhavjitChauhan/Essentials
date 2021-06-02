describe('evalPJS()', function () {
    it('should evaluate Processing code', function () {
        const str = 'PI';
        assert.equal(evalPJS(str), Math.PI);
    });
    it('should mimic eval for non-Processing code', function () {
        const str = 'Math.PI';
        assert.equal(evalPJS(str), eval(str));
    });
});
