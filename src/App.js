import CartContainer from "./components/Cart/CartContainer";
import Navbar from "./components/Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { calculateTotals,getCartItems } from "./components/features/cartSlice";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Shopping from "./components/Shopping/Shopping";
import ItemChange from "./components/ItemChange";


function App() {

  const {cartItems,isLoading} =  useSelector((state)=>(state.cart))
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  
  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return(
      <div>
        Loading...
      </div>
    )
  }

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