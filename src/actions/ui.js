import { UPDATE_UI } from 'constants/ui';

function updateUI(component, state) {
  return {
    type: UPDATE_UI,
    component,
    state,
  };
}

export { updateUI };
