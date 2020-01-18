import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  newTodo = (newEntry) => {
    this.setState({
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newEntry, id: Date.now(), completed: false }
      ]
    });
  };

  toggleComplete = (entry, index) => {
    const currentTodoList = [...this.state.todoList];
    const updatedEntry = { ...entry };
    updatedEntry.completed = !updatedEntry.completed;
    currentTodoList[index] = updatedEntry;

    this.setState({ ...this.state, todoList: currentTodoList });
  };

  clearComplete = () => {
    let uncompleteTodos = this.state.todoList.filter(
      entry => entry.completed === false
    );
    this.setState({ todoList: uncompleteTodos });
  };

  render() {
    return (
      <div className="todo-list">
        <h2>Todo:</h2>
        <TodoList
          todos={this.state.todoList}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm 
          newTodo={this.newTodo}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
