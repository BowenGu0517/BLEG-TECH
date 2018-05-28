import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}
const store = createStore( counter)
console.log( 'store.getState(): ' + store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
