const popMatrixFixture = window.__fixtures__['pushPop/matrix'];
const popStyleFixture = window.__fixtures__['pushPop/style'];

describe('push() and pop()', function () {
    it('should call `pushMatrix()` and `popMatrix()`', function () {
        const cell = cellIndex++;
        const x = cell * 100;
        push();
        push();
        p.rotate(45);
        pop();
        p.rect(x + 25, 25, 50, 50);
        const img = p.get(x, 0, 100, 100);
        pop();
        assert.sameOrderedMembers(Array.from(img.imageData.data), popMatrixFixture.data);
    });
    it('should call `pushStyle()` and `popStyle()`', function () {
        const cell = cellIndex++;
        const x = cell * 100;
        push();
        p.fill(GREEN);
        push();
        p.fill(RED);
        pop();
        p.rect(x + 25, 25, 50, 50);
        const img = p.get(x, 0, 100, 100);
        pop();
        assert.sameOrderedMembers(Array.from(img.imageData.data), popStyleFixture.data);
    });
});
