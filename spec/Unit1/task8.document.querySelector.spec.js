describe('task 6, document.getElementById', () => {
  it('should get element by query selector "#one" with text "Hello World"', () => {
    document.write(window.__html__['src/Unit1/task8.document.querySelector.html']);

    expect(document.querySelector('#one').textContent).toBe('Hello World');
  });
});
