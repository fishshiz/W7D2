import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
  3: {
    id: 3,
    title: 'rake react',
    body: 'w cake',
    done: false
  },
  4: {
    id: 4,
    title: 'learn react',
    body: 'w cake',
    done: false
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      newState = merge({}, state, newTodo);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
