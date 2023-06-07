import './App.css';
import React from 'react';
import TodoForm from './ui/containers/TodoForm';
import TodoItemList from './ui/component/todoitem/TodoItemList';

function App() {
  return (
    <div className='container'>
      <h1>ToDo</h1>
      <TodoForm />
      <TodoItemList />
    </div>

  );
}

export default App;
