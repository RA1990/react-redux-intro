import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';// provider gives the state
import { createStore } from 'redux';// is a object with your data in it
import rootReducer from './reducers';

import App from './components/app';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
