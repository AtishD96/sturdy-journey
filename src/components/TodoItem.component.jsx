import React from 'react';
import '../App.css';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask()}>
                X
            </button>
        </div>
    );
}
export default TodoItem;