describe('unit1.task5, document.getElementById', () => {
  it('should update HELLO to WORLD', () => {
    document.write(window.__html__['src/Unit1/unit1.task5.html']);
    expect(document.getElementById('two').textContent).toBe('WORLD');
  });
});
