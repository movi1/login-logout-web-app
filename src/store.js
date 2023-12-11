
import { createStore } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = {
  loggedInUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedInUser: action.payload };
    case 'LOGOUT':
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;