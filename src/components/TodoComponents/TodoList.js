// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete }) => {

    console.log("Todos: ", todos)
    return (
        <div className="todo-list">
            {todos.map((entry, index) => {
                return (
                    <Todo
                        entry={entry}
                        key={entry.id}
                        toggleComplete={() => toggleComplete(entry, index)}
                    />
                )
            })}
        </div>
    );
};

export default TodoList;