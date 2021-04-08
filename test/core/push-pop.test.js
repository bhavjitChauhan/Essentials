const popMatrixFixture = window.__fixtures__['pushPop/matrix'];
const popStyleFixture = window.__fixtures__['pushPop/style'];

describe('push() and pop()', function () {
    it('should call `pushMatrix()` and `popMatrix()`', function () {
        const cell = cellIndex++;
        const x = cell * 100;
        push();
        push();
        e.rotate(45);
        pop();
        e.rect(x + 25, 25, 50, 50);
        const img = e.get(x, 0, 100, 100);
        pop();
        assert.sameOrderedMembers(Array.from(img.imageData.data), popMatrixFixture.data);
    });
    it('should call `pushStyle()` and `popStyle()`', function () {
        const cell = cellIndex++;
        const x = cell * 100;
        push();
        e.fill(GREEN);
        push();
        e.fill(RED);
        pop();
        e.rect(x + 25, 25, 50, 50);
        const img = e.get(x, 0, 100, 100);
        pop();
        assert.sameOrderedMembers(Array.from(img.imageData.data), popStyleFixture.data);
    });
});
