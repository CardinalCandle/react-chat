import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import reducers from './reducers';
//import { addUser } from './actions';
import setupSocket from './sockets';
import reportWebVitals from './reportWebVitals';
import handleNewMessage from './sagas';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
	);

//store.dispatch(addUser('Me'))
const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
