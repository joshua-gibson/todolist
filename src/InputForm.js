import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const InputForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add ToDo"
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default InputForm;
