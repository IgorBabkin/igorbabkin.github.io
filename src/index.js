import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/app/App.component';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";

const store = createStore(reducers);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
