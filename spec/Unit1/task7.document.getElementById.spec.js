describe('task 6, document.getElementById', () => {
  it('should get element by id "two" with text "144"', () => {
    document.write(window.__html__['src/Unit1/task7.document.getElementById.html']);

    expect(document.getElementById('two').textContent).toBe('144');
  });
});
