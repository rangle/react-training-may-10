import { combineReducers } from 'redux';
import queryReducer from './query';
import robotsReducer from './robots';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  query: queryReducer,
  robots: robotsReducer,
  router: routerReducer,
});

export default rootReducer;
