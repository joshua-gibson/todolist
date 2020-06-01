import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn aout React Hooks' },
    { text: 'Meet friend for lunch' },
    { text: 'Build cool React App' },
  ]);

  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export default App;
