import { ADD, DELETE, EDIT, MARK, MARK_ALL, CLEAR_MARKED } from 'constants/todos';

export function addTodo(text) {
  return {
    type: ADD,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE,
    id
  };
}

export function editTodo(id, text) {
  return {
    type: EDIT,
    id,
    text
  };
}

export function markTodo(id) {
  return {
    type: MARK,
    id
  };
}

export function markAll() {
  return {
    type: MARK_ALL
  };
}

export function clearMarked() {
  return {
    type: CLEAR_MARKED
  };
}
