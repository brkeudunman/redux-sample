
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from './components/features/cartSlice'
import shoppingReducer from './components/features/shoppingSlice'

export const store = configureStore(
    {
        reducer:{
            cart:cartReducer,
            shopping:shoppingReducer
        },
    }
)