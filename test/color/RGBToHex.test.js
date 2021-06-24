describe('RGBToHex()', function () {
    it('should convert RGB values as arguments', function () {
        const r = 0, g = 111, b = 222;
        assert.equal(RGBToHex(r, g, b), '#006FDE');
    });
    it('should convert RGBA values as arguments', function () {
        const r = 0, g = 111, b = 222, a = 100;
        assert.equal(RGBToHex(r, g, b, a), '#006FDE64');
    });
    it('should convert integer colors', function () {
        const col = GREEN;
        assert.equal(RGBToHex(col), '#008000');
    });
    it('should convert integer colors with transparency', function () {
        const col = p.color(GREEN, 100);
        assert.equal(RGBToHex(col), '#00800064');
    });
    it('should respect the octothorpe argument', function () {
        const col = GREEN;
        assert.equal(RGBToHex(col, true, false), '008000');
    });
    it('should convert RGB to shorthand hexadecimal values', function () {
        const col = RED;
        assert.equal(RGBToHex(col), '#F00');
    });
    it('should convert RGBA to shorthand hexadecimal values', function () {
        const col = p.color(RED, 238);
        assert.equal(RGBToHex(col), '#F00E');
    });
    it('should respect the shorthand argument', function () {
        const col = RED;
        assert.equal(RGBToHex(col, false), '#FF0000');
    });
});
