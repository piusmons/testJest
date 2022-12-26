const capitalise = require('./capitalise');
let a = "meow";
test('takes string at capitalises', () => {
  expect(capitalise(a)).toBe("Meow");
});

