import { GET_ERRORS, SET_ERRORS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, message: action.payload };
    case SET_ERRORS:
      return { ...state, message: action.payload.error };
    default:
      return state;
  }
}