import React from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import store from './store/index';



ReactDOM.render(
  <div>
    <TodoAdd />
    <TodoList />
  </div>,
  document.getElementById('root')
);


