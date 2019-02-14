import { GET_ERRORS, SET_ERRORS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload.error;
    case SET_ERRORS:
      return action.payload.error;
    default:
      return state;
  }
}