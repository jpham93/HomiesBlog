import { SET_USER } from '../actions';
import { isEmpty } from 'lodash';

const initialState = {
  authenticated: false,
  user: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}