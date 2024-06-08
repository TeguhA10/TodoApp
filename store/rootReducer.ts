import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import apiSlice from './apiSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    api: apiSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
