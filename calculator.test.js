const calculator = require('./calculator')


testCalculator = new calculator();

test("add", () => {
    expect(testCalculator.add(1, 2)).toEqual(3);
})

test("subtract", () => {
    expect(testCalculator.subtract(5,1)).toEqual(4);
})

test("divide", () => {
    expect(testCalculator.divide(5,1)).toEqual(5);
})

test("multiply", () => {
    expect(testCalculator.multiply(5,1)).toEqual(5);
})

test("add undefined", () => {
    expect(testCalculator.add()).toBe(NaN);
})