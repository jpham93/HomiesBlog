import { GET_ERRORS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload.error;
    default:
      return state;
  }
}