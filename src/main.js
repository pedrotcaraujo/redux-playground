import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/Auth.jsx';
import {store} from './store'


const render = () => { ReactDOM.render(<Auth state={store.getState()} />, document.getElementById('container')); }
store.subscribe(render);
render();