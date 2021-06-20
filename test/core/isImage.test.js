describe('isImage()', function () {
    it('should return true for instances of `PImage`', function () {
        const img = p.get(0, 0, WIDTH, HEIGHT);
        assert.isTrue(isImage(img));
    });
    it('should return false for empty objects', function () {
        const img = {};
        assert.isFalse(isImage(img));
    });
    it('should return false for arguments that are not objects', function () {
        const img = 'img';
        assert.isFalse(isImage(img));
    });
});
