import React, { useState } from 'react';

function App() {
  // array to keep the list and items input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a todo
  const handleAddTodo = (e) => {
    e.preventDefault(); //to stop browser from reloading when an item is added
    if (inputValue.trim() == '') return; //To refuse adding empty items

    setTodos([...todos, inputValue]); // Copy old list and add new item
    setInputValue(''); // Clear the text box
  };

  // Function to delete a todo
  const handleDeleteTodo = (indexToDelete) => {
    // Keep only the items whose index doesn't match the deleted one
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>My Todo List</h2>
      
      {/* Form to submit new items */}
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          style={{ padding: '8px', marginRight: '5px' }}
        />
        <button type="submit" style={{ padding: '8px' }}>Add</button>
      </form>

      {/* Displaying the list */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} style={{ color: 'red' }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;