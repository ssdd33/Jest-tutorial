class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.top = -1;
  }

  push(value) {
    this.stack.push(value);
    this.size++;
    this.top = value;
  }
  pop() {
    if (!this.size) {
      return;
    }
    const poped = this.stack.pop();
    this.size--;
    this.top = this.stack[this.size - 1];
    return poped;
  }
}

module.exports = Stack;
