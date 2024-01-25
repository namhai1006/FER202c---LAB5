import React, { useState } from "react";

function TodoList() {
    // State to hold the list of todo items
    const [todos, setTodos] = useState([]);
    
    // State to hold the current todo input
    const [todoInput, setTodoInput] = useState("");

    // Function to handle todo input changes
    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    // Function to handle todo submission
    const handleAddTodo = () => {
        if (todoInput.trim() !== "") {
            setTodos([...todos, todoInput]);
            setTodoInput("");
        }
    };

    // Function to handle todo deletion
    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={todoInput}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
