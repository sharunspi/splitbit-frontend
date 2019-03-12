import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Contents/App';
import Head from './components/head/Head'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Content />, document.getElementById('content'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
