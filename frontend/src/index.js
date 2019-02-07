import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>
,document.getElementById('root'));

