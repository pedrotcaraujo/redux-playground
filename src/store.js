import {createStore} from 'redux';
import {auth} from './reducers';

const store = createStore(auth);

export {store};