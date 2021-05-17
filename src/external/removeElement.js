/**
 * Remove element from canvas.
 * 
 * @param {string} id HTML id attribute
 * 
 * @example
 * drawElement({
 *     data: '<h1>Hello World</h1>',
 *     id: 'hello-world',
 *     x: 100,
 *     y: 100
 * });
 * removeElement('hello-world');
 * // expected outcome: removed element
 * 
 * @example
 * const el = drawElement({
 *     data: '<h1>Hello World</h1>',
 *     x: 100,
 *     y: 100
 * });
 * removeElement(el);
 * // expected outcome: removed element
 * 
 * @see {@link clearElements}
 * @see {@link drawElement}
 */
removeElement = id => {
    $(`#${id}`).remove();
};
