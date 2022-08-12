import { createSlice,createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

const initialState = {
    cartItems:[],
    unitAmount:0,
    total:0,
    loading:true
}

export const getCartItems = createAsyncThunk('cart/getCartItems',async ()=>{
    return axios.get('https://course-api.com/react-useReducer-cart-project').catch((err)=>{
        console.log(err)
    })
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems = [];
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
    extraReducers:{
        [getCartItems.pending]:(state)=>{
            state.isLoading=true
        },
        [getCartItems.fulfilled]:(state,action)=>{
            console.log(action)
            state.isLoading=false
            state.cartItems=action.payload.data
        },
        [getCartItems.pending]:(state)=>{
            console.log('error has occured')
            state.isLoading=false
        }
    }
})

console.log(cartSlice)

export const  {clearCart,removeItem,decreaseItem,increaseItem,calculateTotals,changeItem} = cartSlice.actions;

export default cartSlice.reducer