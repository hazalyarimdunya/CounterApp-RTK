import{configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
export const store = configureStore({
    reducer:{
        counter : counterReducer, //tum slicelar ilgili slider sayfalarindan import edilerek buraya obje olarak verilecek.
    }
})