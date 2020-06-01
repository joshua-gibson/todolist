import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import InputForm from './InputForm';
import ToDoList from './ToDoList';
import useTodoState from './useTodoState';
import './App.css';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <InputForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
