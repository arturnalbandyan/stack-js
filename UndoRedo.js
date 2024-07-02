// Stack File - https://github.com/arturnalbandyan/stack-js/blob/master/Stack.js
class UndoRedoManager {
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
    this.state = "";
  }

  performAction(newState) {
    this.undoStack.push(this.state);
    this.state = newState;
    this.redoStack = new Stack(); // Clear the redo stack
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      this.redoStack.push(this.state);
      this.state = this.undoStack.pop();
    } else {
      console.log("Nothing to undo");
    }
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      this.undoStack.push(this.state);
      this.state = this.redoStack.pop();
    } else {
      console.log("Nothing to redo");
    }
  }
}

// Usage example
let manager = new UndoRedoManager();
manager.performAction("State 1");
manager.performAction("State 2");
console.log(manager.state);  // Output: State 2
manager.undo();
console.log(manager.state);  // Output: State 1
manager.redo();
console.log(manager.state);  // Output: State 2

