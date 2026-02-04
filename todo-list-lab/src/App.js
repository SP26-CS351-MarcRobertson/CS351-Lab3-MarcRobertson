// Import readt and the useState hook for statement management
import React, { useState } from 'react';
// Import the CSS file for styling
import './App.css';

// Import our custom components
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // State to hold the list of todo items
  const [todos, setTodos] = useState([]);

  // inputValue string to store current input field
  const [inputValue, setInputValue] = useState("");

  // Function updates inputValue state when user types in input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

}