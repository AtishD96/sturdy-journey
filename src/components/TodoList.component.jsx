import React, { useEffect, useState } from "react";
import '../App.css';
import TodoItem from "./TodoItem.component";
import mockApiCall from "../mockApi/mockApiCall";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [date,setDate]=useState(null);
    const [search,setSearch]=useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            date,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
        setDate(null);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
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

    // const getMockApi=async()=>{
    //     try{
    //         const res=await fetch('mockApiCall.js');
    //         if(!res.ok){
    //             throw new Error(`Server response status: ${res.status}`)
    //         }
    //         const data=res.json(res);
    //         setTasks(data);
    //     }catch(error){
    //         console.log(error.message)
    //     }
    // }
    const getMockApi=async()=>{
        const data=await mockApiCall();
        console.log('data',data)
        setTasks(data);
    }
    useEffect(() => {
        // TODO: Call mockApiCall function from mockApiCall.js call this only once when page loads.
        getMockApi();
    },[])

    const SearchItem=(e)=>{
        const searchData=e.target.value;
        setSearch(e.target.value);
        if(searchData!==''){
            const filterData=tasks.filter(task => task.text.toLowercase() === searchData.toLowercase());
            setTasks(filterData);
            setSearch('');
        }
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={()=>deleteTask(task.id)}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <h2>Search the Item</h2>
            <input
                type="search"
                value={search}
                onChange={SearchItem}
            />
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
             <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button className="btn-light" onClick={() => addTask(text)}>Add</button>
        </div>
    );
}
export default TodoList;