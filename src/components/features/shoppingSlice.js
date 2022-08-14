

// Does not need a shoppingSlice for fetching data , but just for a learning and understanding I will implement it.

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchShoppingList = createAsyncThunk('shopping/fetchShoppingList',async ()=>{
    return axios.get("https://course-api.com/react-useReducer-cart-project").catch((err)=>{
        console.log(err)
    })
})  

const initialState = {
    shoppingList:[],
    isLoading:true,
    listAmount:0
}

const shoppingSlice = createSlice({
    name:'shopping',
    initialState,
    reducers:{
        calculateListAmount:(state)=>{
            state.listAmount=state.shoppingList.length
        }
    },
    extraReducers:{
        [fetchShoppingList.pending]:(state)=>{
            state.isLoading=true
        },
        [fetchShoppingList.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.shoppingList=action.payload.data
        },
        [fetchShoppingList.rejected]:(state)=>{
            state.isLoading=false
            console.log("err has occured")
        }

    }
})

export const {calculateListAmount} = shoppingSlice.actions
export default shoppingSlice.reducer

