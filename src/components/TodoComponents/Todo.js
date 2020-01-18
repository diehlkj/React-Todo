import React from 'react';

const Entry = ({ entry, toggleComplete }) => {

    return (
        <div
            onClick={toggleComplete}
            className={`entry${entry.completed ? " completed" : ""}`}
        >
            <p>{entry.task}</p>
        </div>
    );
};

export default Entry;