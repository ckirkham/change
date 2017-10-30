import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
  primaryColor: '#1B98E0',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};
