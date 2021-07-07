describe('HSBToRGB()', function () {
    it('should convert HSB', function () {
        const h = 0, s = 100, b = 100;
        assert.sameOrderedMembers(HSBToRGB(h, s, b), [255, 0, 0, 255]);
    });
    it('should convert HSBA', function () {
        const h = 0, s = 100, b = 100, a = 50;
        assert.sameOrderedMembers(HSBToRGB(h, s, b, a), [255, 0, 0, 127.5]);
    });
    it('should convert color integers', function () {
        assert.sameOrderedMembers(HSBToRGB(RED), [255, 0, 0, 255]);
    });
    it('should respect the current color mode', function () {
        const h = 0, s = 100, b = 100, a = 50;
        p.pushStyle();
        p.colorMode(p.RGB, 1);
        const result = HSBToRGB(h, s, b, a);
        p.popStyle();
        assert.sameOrderedMembers(result, [1, 0, 0, 0.5]);
    });
    it('should ignore the current color mode if HSB', function () {
        const h = 0, s = 100, b = 100, a = 50;
        p.pushStyle();
        presetColorMode(p.HSB);
        const result = HSBToRGB(h, s, b, a);
        p.popStyle();
        assert.sameOrderedMembers(result, [255, 0, 0, 127.5]);
    });
    it('should respect the current color mode with color integers', function () {
        p.pushStyle();
        p.colorMode(p.RGB, 1);
        const result = HSBToRGB(RED);
        p.popStyle();
        assert.sameOrderedMembers(result, [1, 0, 0, 1]);
    });
    it('should ignore the current color mode if HSB with color integers', function () {
        p.pushStyle();
        presetColorMode(p.HSB);
        const result = HSBToRGB(RED);
        p.popStyle();
        assert.sameOrderedMembers(result, [255, 0, 0, 255]);
    });
});
