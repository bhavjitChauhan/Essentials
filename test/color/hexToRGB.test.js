describe('hexToRGB()', function () {
    it('should convert regular hexadecimal colors', function () {
        const hexA = '#FF0000';
        const hexB = 'FF0000';
        assert.equal(hexToRGB(hexA), -65536);
        assert.sameOrderedMembers(hexToRGB(hexA, false), [255, 0, 0]);
        assert.equal(hexToRGB(hexB), -65536);
    });
    it('should convert hexadecimal colors with an alpha value', function () {
        const hexA = '#FF0000AA';
        const hexB = 'FF0000AA';
        assert.equal(hexToRGB(hexA), -1426128896);
        assert.sameOrderedMembers(hexToRGB(hexA, false), [255, 0, 0, 170]);
        assert.equal(hexToRGB(hexB), -1426128896);
    });
    it('should convert regular shorthand hexadecimal colors', function () {
        const hexA = '#F00';
        const hexB = 'F00';
        assert.equal(hexToRGB(hexA), -65536);
        assert.sameOrderedMembers(hexToRGB(hexA, false), [255, 0, 0]);
        assert.equal(hexToRGB(hexB), -65536);
    });
    it('should convert shorthand hexadecimal colors with an alpha value', function () {
        const hexA = '#F00A';
        const hexB = 'F00A';
        assert.equal(hexToRGB(hexA), -1426128896);
        assert.sameOrderedMembers(hexToRGB(hexA, false), [255, 0, 0, 170]);
        assert.equal(hexToRGB(hexB), -1426128896);
    });
    it('should should respect the current color range', function () {
        const hexA = '#F00';
        const hexB = 'F00';
        p.colorMode(p.RGB, 1);
        assert.sameOrderedMembers(hexToRGB(hexA, false), [1, 0, 0, 1]);
        assert.sameOrderedMembers(hexToRGB(hexB, false), [1, 0, 0, 1]);
    });
});
