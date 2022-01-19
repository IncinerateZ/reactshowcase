import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import redirectReducer from './redirectReducer';

export const allReducers = () =>
    combineReducers({
        location: locationReducer,
        redirect: redirectReducer,
    });
