# Redux - toolkit

## step 1 :
- create a file store.js
- import some configuration
 
``
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js'
export const store = configureStore({
reducer : todoReducer
});
 ``
##  step 2 : 
