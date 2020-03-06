describe('task 6, document.getElementById', () => {
  it('should get element by id "one" with text "Hello World"', () => {
    document.write(window.__html__['src/Unit1/task6.document.getElementById.html']);

    expect(document.getElementById('one').textContent).toBe('Hello World');
  });
});
