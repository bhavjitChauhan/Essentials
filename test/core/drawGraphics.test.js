describe('drawGraphics()', function () {
    const fixture = window.__fixtures__['drawGraphics'];
    prepare();

    it('should draw graphics', function () {
        drawGraphics(10, 10, 80, 80, function () {
            this.background(0xFF00FF00);
        });
        assert.equal(hashImageData(), fixture.blank);
    });
});

