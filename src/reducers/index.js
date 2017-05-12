import { combineReducers } from 'redux';
import queryReducer from './query';
import robotsReducer from './robots';


const rootReducer = combineReducers({
  query: queryReducer,
  robots: robotsReducer,
});

export default rootReducer;