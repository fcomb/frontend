import { handleActions } from 'redux-actions';
import { ADD, DELETE, EDIT, MARK, MARK_ALL, CLEAR_MARKED } from 'constants/todos';

const initialState = [{
  text: 'Use Redux',
  marked: false,
  id: 0,
}];

const todos = handleActions({
  [ADD]: (state, action) => (
    [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      marked: false,
      text: action.text,
    }, ...state]
  ),

  [DELETE]: (state, action) => (
    state.filter(todo => todo.id !== action.id)
  ),

  [EDIT]: (state, action) => (
    state.map(todo =>
      todo.id === action.id ? {...todo, text: action.text } : todo
    )
  ),

  [MARK]: (state, action) => (
    state.map(todo =>
      todo.id === action.id ? {...todo, marked: !todo.marked } : todo
    )
  ),

  [MARK_ALL]: (state) => {
    const areAllMarked = state.every(todo => todo.marked);

    return state.map(todo => ({...todo, marked: !areAllMarked }));
  },

  [CLEAR_MARKED]: (state) => (
    state.filter(todo => todo.marked === false)
  ),
}, initialState);

export default todos;
