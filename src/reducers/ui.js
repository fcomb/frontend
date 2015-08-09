import { handleActions } from 'redux-actions';
import { UPDATE_UI, MODAL_SIGN_IN } from 'constants/ui';

const initialState = {
  [MODAL_SIGN_IN]: {
    isOpen: false,
  },
};

const ui = handleActions({
  [UPDATE_UI]: (st, action) => {
    const { component, state } = action;

    return {
      ...st,
      [component]: state,
    };
  },
}, initialState);

export default ui;
