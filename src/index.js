import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';             /* crea provider(quien habilita el connect) */
import { createStore , applyMiddleware } from 'redux';                /* crea store */
import Reducers from './reducers/Reducers';    /* crea reducer */
import thunk from "redux-thunk";

//let store = createStore(reducer);
const createStoreWithMidddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMidddleware(Reducers);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}>
    <App />

  </Provider>, document.getElementById('root'));

registerServiceWorker();
