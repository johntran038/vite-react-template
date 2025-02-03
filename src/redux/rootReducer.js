import { combineReducers } from '@reduxjs/toolkit';
import templateReducer from './slices/templateSlice';

const rootReducer = combineReducers({
    //name: nameReducer,
    template: templateReducer,
});

export default rootReducer;