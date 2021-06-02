describe('formatDuration()', function () {
    it('should correctly format durations', function () {
        const martianDay = 88_775_244;
        assert.equal(formatDuration(martianDay), '1 day, 39 minutes, 35 seconds, 244 milliseconds');
    });
    it('should correctly format sub-millisecond durations', function () {
        const n = 1e-3;
        assert.equal(formatDuration(n), '1 microsecond');
    });
    it('should correctly format sub-millisecond durations', function () {
        const n = 1e-3;
        assert.equal(formatDuration(n), '1 microsecond');
    });
    it('should correctly account for precision', function () {
        const earthDay = 86_399_999.9466;
        assert.equal(formatDuration(earthDay, 1e3 * 60 * 60 * 24), '1 day');
    });
    it('should return raw values', function () {
        const moonRotation = 27.322 * 24 * 60 * 60 * 1000;
        assert.deepEqual(formatDuration(moonRotation, 1e3, true), [0, 0, 27, 7, 43, 41, 0, 0]);
    });
});
