import { createSlice,createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

const initialState = {
    cartItems:[],
    unitAmount:0,
    total:0,
    loading:true
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems = [];
        },
        addItem:(state,action)=>{
            const item=action.payload
            state.cartItems.push(item)
        },
        removeItem:(state,action)=>{
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item)=>
                item.id !== itemId
            )
        },
        increaseItem:(state,action)=>{
            console.log(action.payload)
            const cartItem = state.cartItems.find((item)=>item.id===action.payload.id)
            cartItem.amount+=1
        },
        decreaseItem:(state,action)=>{
            const cartItem = state.cartItems.find((item)=>item.id===action.payload.id)
            cartItem.amount-=1
        },
        changeItem:(state,action)=>{
            const cartItem = state.cartItems.find((item)=>item.id===action.payload.id)
            cartItem.price=action.payload.price
            cartItem.title=action.payload.title
        },
        calculateTotals: (state)=>{
            let amount = 0
            let total = 0
    
            state.cartItems.forEach((item)=>{
                amount+=item.amount
                total+=item.amount*item.price
            })
            
            state.unitAmount=amount
            state.total=total
        }
    },
})

console.log(cartSlice)

export const  {addItem,clearCart,removeItem,decreaseItem,increaseItem,calculateTotals,changeItem} = cartSlice.actions;

export default cartSlice.reducer