describe('complement()', function () {
    it('should return the negation of a given function', function () {
        const fA = () => true;
        const fB = () => complement(fA);
        assert.notEqual(fA(), fB());
    });
    it('should throw an error if no arguments are given', function () {
        const f = complement();
        assert.throws(f, TypeError);
    });
});
