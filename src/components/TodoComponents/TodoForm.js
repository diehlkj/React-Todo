// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    };

    handleChanges = e => {
        console.log(`TodoForm.js: handleChanges: `);
        this.setState({ ...this.state, newTodo: e.target.value}); //Ask what the ... does again I dont remember :(
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(`TodoForm.js: handleSubmit: `);
        this.props.newTodo(this.state.newTodo);
        this.setState({ newTodo: "" }); // clear input after submitting
    };


    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="entry"
                    onChange={this.handleChanges}
                    value={this.state.newTodo}
                />
                <button type="submit">Create</button>
                <button type="button" onClick={this.props.clearComplete}>Clear Complete</button>
            </form>
        );
    }
};

export default TodoForm;