import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  errors: ErrorReducer
});

export default rootReducer;