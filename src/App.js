import CartContainer from "./components/Cart/CartContainer";
import Navbar from "./components/Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Shopping from "./components/Shopping/Shopping";
import ItemChange from "./components/Cart/ItemChange";

import { calculateListAmount, fetchShoppingList } from "./components/features/shoppingSlice";
import { calculateTotals } from "./components/features/cartSlice";


function App() {


  const {shoppingList,listAmount} = useSelector((state)=>(state.shopping))
  const {cartItems} = useSelector((state)=>(state.cart))
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(()=>{
    dispatch(calculateListAmount())
  },[shoppingList])
  
  useEffect(()=>{
    dispatch(fetchShoppingList())
  },[])

  return (
    <main >
      <Navbar></Navbar>
      <Routes>
        <Route  excact path="*" element={<Shopping />} />
        <Route exact path="cart" element={<CartContainer />} />
        <Route exact path="editItem" element={<ItemChange />} />
      </Routes>
    </main>
  )
}
export default App;