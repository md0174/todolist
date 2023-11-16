import React, { useState, useRef } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const todoInputRef = useRef();
    const colors = ['#8e44ad', '#3498db'];
    const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

    const addTodo = () => {
        const newTodo = todoInputRef.current.value.trim();

        if (newTodo !== '') {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            todoInputRef.current.value = '';
            setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }
    };

    const removeTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className="body">
            <div className="container">
                <div className="content">
                    <h1>ToDo List</h1>

                    <div className="inputContainer">
                        <input
                            className="input"
                            type="text"
                            ref={todoInputRef}
                            placeholder="Enter an item"
                        />
                        <button className="addButton" onClick={addTodo}>
                            Add
                        </button>
                    </div>

                    <ul className="todoList">
                        {todos.map((todo, index) => (
                            <li
                                key={index}
                                style={{
                                    backgroundColor: colors[(backgroundColorIndex + index) % colors.length],
                                    border: '1px solid #000',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#50A85E')}
                                onMouseOut={(e) =>
                                (e.target.style.backgroundColor = colors[
                                    (backgroundColorIndex + index) % colors.length
                                ])
                                }
                            >
                                {todo}
                                <button
                                    className="removeButton"
                                    onClick={() => removeTodo(index)}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#e74c3c')}
                                    onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = colors[
                                        (backgroundColorIndex + index) % colors.length
                                    ])
                                    }
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;