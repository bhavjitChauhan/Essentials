describe('complement()', function () {
    it('should return the negation of a given function', function () {
        const fnA = () => true;
        const fnB = () => complement(fnA);
        assert.notEqual(fnA(), fnB());
    });
    it('should throw an error if no arguments are given', function () {
        const fn = complement();
        assert.throws(fn, TypeError);
    });
});
