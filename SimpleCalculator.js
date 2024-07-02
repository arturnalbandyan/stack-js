// Stack File - https://github.com/arturnalbandyan/stack-js/blob/master/Stack.js

function simpleCalculator(expression) {
  let stack = new Stack();
  let tokens = expression.split(' ');

  tokens.forEach(token => {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
      }
    }
  });

  return stack.pop();
}

// Usage example
console.log(simpleCalculator("3 4 + 2 * 7 /"));  // Output: 2
