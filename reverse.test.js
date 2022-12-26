const reverse = require('./reverse');
let a = "meow";
test('takes string and reverses', () => {
  expect(reverse(a)).toBe("woem");
});

