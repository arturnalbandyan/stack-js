// Stack File - https://github.com/arturnalbandyan/stack-js/blob/master/Stack.js
function isBalanced(expression) {
  let stack = new Stack();
  for (let char of expression) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// Usage example
console.log(isBalanced("(())"));  // Output: true
console.log(isBalanced("(()"));   // Output: false
