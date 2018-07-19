import {createStore} from 'redux';
import rootReducer from 'src/reducers';

export const store = createStore(rootReducer);
