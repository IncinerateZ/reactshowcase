import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import redirectReducer from './redirectReducer';
import reducerOneReducer from './reducerOneReducer';

export const allReducers = () =>
    combineReducers({
        location: locationReducer,
        redirect: redirectReducer,
        reduxone: reducerOneReducer,
    });
