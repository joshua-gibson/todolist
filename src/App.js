import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn aout React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build cool App' },
  ]);

  //const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={index} />
        ))}
      </div>
    </div>
  );
}
export default App;
