describe('getColonTime()', function () {
    it('should return a string containing a valid time', function () {
        const regex = /^\d{2}:\d{2}:\d{2}$/;
        assert.isTrue(regex.test(getColonTime()));
    });
});
