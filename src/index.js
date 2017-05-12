import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/app';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootReducer from './reducers'


const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
