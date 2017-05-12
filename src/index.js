import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/app';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';
import rootReducer from './reducers';
import { ConnectedRouter } from 'react-router-redux';


const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
