const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  get count() {
    return _stack.get(this).length;
  }

  push(value) {
    _stack.get(this).push(value);
  }

  pop() {
    if (_stack.get(this).length === 0) throw new Error("stack is empty");
    return _stack.get(this).pop();
  }

  peek() {
    if (_stack.get(this).length === 0) throw new Error("stack is empty");
    return _stack.get(this)[_stack.get(this).length - 1];
  }
}

module.exports = Stack;
