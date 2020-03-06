describe('unit1.task3, document.querySelector', () => {
  it('should get element by class "one" with text "Welcome to course javaScript by querySelector"', () => {
    document.write(window.__html__['src/Unit1/unit1.task3.html']);
    expect(document.querySelector('one').textContent).toBe('Welcome to course javaScript by querySelector');
  });
});
