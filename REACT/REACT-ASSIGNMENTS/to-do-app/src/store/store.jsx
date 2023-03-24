import {configureStore} from '@reduxjs/toolkit'
import  TodoSlice  from '../features/features'
export const store = configureStore({
    reducer : {
        Todos : TodoSlice
    }
})