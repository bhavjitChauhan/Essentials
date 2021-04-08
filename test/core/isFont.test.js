describe('isFont()', function () {
    it('should return true for instances of `PFont`', function () {
        const f = e.createFont('sans');
        assert.isTrue(isFont(f));
    });
    it('should return false for empty objects', function () {
        const f = {};
        assert.isFalse(isFont(f));
    });
    it('should return false for arguments that are not objects', function () {
        const f = 'sans';
        assert.isFalse(isFont(f));
    });
});
