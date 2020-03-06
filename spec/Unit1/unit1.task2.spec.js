describe('unit1.task2, document.getElementById', () => {
  it('should get element by id "two" with text "12 * 12"', () => {
    document.write(window.__html__['src/Unit1/unit1.task2.html']);
    expect(document.getElementById('two').textContent).toBe(144);
  });
});
