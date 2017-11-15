import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { receiveTodos } from './actions/todo_actions.js';
import { receiveTodo } from './actions/todo_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root store={store}/>, root);
});
