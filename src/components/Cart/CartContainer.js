import React from 'react'
import CartUnit from './CartUnit'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import { NavLink } from 'react-router-dom'

const CartContainer = () => {

    const {unitAmount,total,cartItems} = useSelector((store)=>store.cart)

    const dispatch = useDispatch();    

    if(unitAmount<1){
        return(
            <section className='cart'>
                <h2>Bag is empty</h2>
            </section>
        )
    }
    return (
        <section className='cart'> 
            <header>
                <h2>your bag</h2>
            </header>
            <div>
            {cartItems.map((item)=>{
                return(
            <div>
                 <CartUnit key={item.id} {...item}></CartUnit>
            </div>)})}

            </div>
            <footer>
                <hr/>
                <h4>
                Total is {total}
                </h4>
                <button onClick={()=>dispatch(clearCart())} className='btn clear-btn'>clear</button>
            </footer>

        </section>

    )
}

export default CartContainer