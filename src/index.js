import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import debounce from 'debounce';

import './polyfills';
import './index.css';
import App from './App';
import rootReducer, { initialState } from './store/reducers/books';
import * as ls from './localStorage';
import registerServiceWorker from './registerServiceWorker';

let composeEnhancers;

const persistedBooksList = ls.load('booksList');

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(
  rootReducer,
  {
    ...initialState,
    booksList: persistedBooksList || initialState.booksList,
  },
  composeEnhancers(),
);

store.subscribe(debounce(
  () => {
    const booksList = store.getState().booksList;
    ls.save('booksList', booksList);
  }
), 200);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
