describe('isFont()', function () {
    it('should return true for instances of `PFont`', function () {
        const sans = e.createFont('sans-serif');
        assert.isTrue(isFont(sans));
    });
    it('should return false for empty objects', function () {
        const obj = {};
        assert.isFalse(isFont(obj));
    });
    it('should return false for arguments that are not objects', function () {
        const str = 'sans-serif';
        assert.isFalse(isFont(str));
    });
});
