import React, { useEffect, useState } from "react";
import '../App.css';
import TodoItem from "./TodoItem.component";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask() {
        setTasks(tasks.filter(task => task.completed !== false));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    useEffect(() => {
        // TODO: Call mockApiCall function from mockApiCall.js call this only once when page loads.
    })

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className="btn-light" onClick={() => addTask(text)}>Add</button>
        </div>
    );
}
export default TodoList;