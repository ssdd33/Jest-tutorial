const Stack = require("../stack");

/*
TODO:
push: stack의 마지막 요소 확인
pop: 리턴값이 이전의 마지막 요소와 같은지, 마지막요소가 바뀌었는지 
*/
describe("stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size).toBe(0);
  });

  it("when push value to stack, value should be at the top of stack", () => {
    stack.push(1);
    expect(stack.top).toBe(1);

    stack.push(2);
    expect(stack.top).toBe(2);
  });

  it("when excute pop on stack, value at the top of stack should be removed and returned", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.top).toBe(2);
  });
});
