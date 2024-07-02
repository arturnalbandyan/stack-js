// Stack File - https://github.com/arturnalbandyan/stack-js/blob/master/Stack.js

function dfs(graph, start) {
  let stack = new Stack();
  stack.push(start);
  let visited = new Set();
  visited.add(start);

  while (!stack.isEmpty()) {
    let node = stack.pop();
    console.log(node);

    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    });
  }
}

// Usage example
let graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

dfs(graph, 'A');  
// Output: A, C, F, B, E, D 
