describe('unit1.task4, document.getElementById', () => {
  it('should get element by id "two" with text "13 * 13"', () => {
    document.write(window.__html__['src/Unit1/unit1.task4.html']);
    expect(document.getElementById('two').textContent).toBe(169);
  });
});
