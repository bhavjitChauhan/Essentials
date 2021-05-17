describe('isSound()', function () {
    it('should return true for instances of sounds', function () {
        const sound = {
            'audio': new Audio()
        };
        assert.isTrue(isSound(sound));
    });
    it('should return false for empty objects', function () {
        const sound = {};
        assert.isFalse(isSound(sound));
    });
    it('should return false for arguments that are not objects', function () {
        const sound = 'sound';
        assert.isFalse(isSound(sound));
    });
});
