describe('RGBToHSB()', function () {
    it('should convert RGB', function () {
        const r = 255, g = 0, b = 0;
        assert.sameOrderedMembers(RGBToHSB(r, g, b), [0, 100, 100, 100]);
    });
    it('should convert HSBA', function () {
        const r = 255, g = 0, b = 0, a = 127.5;
        assert.sameOrderedMembers(RGBToHSB(r, g, b, a), [0, 100, 100, 50]);
    });
    it('should convert color integers', function () {
        assert.sameOrderedMembers(RGBToHSB(RED), [0, 100, 100, 100]);
    });
    it('should respect the current color mode', function () {
        const r = 255, g = 0, b = 0, a = 127.5;
        p.pushStyle();
        p.colorMode(p.HSB, 360, 1, 1, 1);
        const result = RGBToHSB(r, g, b, a);
        p.popStyle();
        assert.sameOrderedMembers(result, [0, 1, 1, 0.5]);
    });
    it('should ignore the current color mode if RGB', function () {
        const r = 255, g = 0, b = 0, a = 127.5;
        p.pushStyle();
        p.colorMode(p.RGB, 1);
        const result = RGBToHSB(r, g, b, a);
        p.popStyle();
        assert.sameOrderedMembers(result, [0, 100, 100, 50]);
    });
    it('should respect the current color mode with color integers', function () {
        p.pushStyle();
        p.colorMode(p.HSB, 360, 1, 1, 1);
        const result = RGBToHSB(RED);
        p.popStyle();
        assert.sameOrderedMembers(result, [0, 1, 1, 1]);
    });
    it('should ignore the current color mode if RGB with color integers', function () {
        p.pushStyle();
        p.colorMode(p.RGB, 1);
        const result = RGBToHSB(RED);
        p.popStyle();
        assert.sameOrderedMembers(result, [0, 100, 100, 100]);
    });
});
