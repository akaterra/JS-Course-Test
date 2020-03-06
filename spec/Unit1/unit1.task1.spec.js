// Niko how to add to describe part of the file name ?
// Like unit1.task1
describe('unit1.task1, document.getElementById', () => {
  it('should get element by id "one" with text "Welcome to course javaScript by getElementById"', () => {
    document.write(window.__html__['src/Unit1/unit1.task1.html']);
    expect(document.getElementById('one').textContent).toBe('Welcome to course javaScript by getElementById');
  });
});
