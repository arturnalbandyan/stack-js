// Stack File - https://github.com/arturnalbandyan/stack-js/blob/master/Stack.js

function reverseString(str) {
  let stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

// Usage example
console.log(reverseString("hello"));  // Output: "olleh"
