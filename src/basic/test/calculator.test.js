const Calculator = require("../calculator");
let calculator;

//각각의 테스트는 독립적이어야 한다.
beforeEach(() => {
  calculator = new Calculator();
});

describe("Calculator", () => {
  it("inits with 0", () => {
    expect(calculator.value).toBe(0);
  });

  it("sets", () => {
    calculator.set(3);
    expect(calculator.value).toBe(3);
  });
  it("add", () => {
    calculator.add(3);
    expect(calculator.value).toBe(3);
  });
  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      calculator.add(101);
    }).toThrow();
  });
  it("subtracts", () => {
    calculator.subtract(2);
    expect(calculator.value).toBe(-2);
  });
  it("multiplies", () => {
    calculator.set(2);
    calculator.multiply(2);
    expect(calculator.value).toBe(4);
  });

  it("clears", () => {
    calculator.set(9);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });
});

describe("Divides", () => {
  it("0/0===NaN", () => {
    calculator.divide(0);
    expect(calculator.value).toBe(NaN);
  });
  it("1/0===Infinity", () => {
    calculator.set(1);
    calculator.divide(0);
    expect(calculator.value).toBe(Infinity);
  });
});
