
import { createStore } from 'redux';

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