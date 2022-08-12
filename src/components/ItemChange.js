import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { changeItem } from './features/cartSlice';
import {NavLink,Link} from 'react-router-dom'
function ItemChange({id}) {
  
  let location = useLocation();
  const dispatch = useDispatch();

  const [cartItem,setCartItem]=useState({
    id:location.state.item.id,
    title:location.state.item.title,
    price:location.state.item.price,
    img:location.state.item.img,
    amount:location.state.item.amount,
  })

  const handleSubmit =  event =>{
    event.preventDefault();
    dispatch(changeItem(cartItem))
  } 
  
  return (
    <div className='cart'>
      <h4>Change the cart item values </h4>
      <h5>for {(location.state.item.id)}</h5>
      <form style={{margin:'8px 0px'}} className='cart-form' onSubmit={handleSubmit}>
        <label for='title'>Name:</label><input style={{margin:'0px 0px',padding:'4px'}} onChange={(event)=>setCartItem({...cartItem,title:event.target.value})} type="text" name="title" placeholder={cartItem.title} />
        <label for='title'>Price:</label><input style={{margin:'0px 0px',padding:'4px'}} onChange={(event)=>setCartItem({...cartItem,price:event.target.value})} type="number" name="number" placeholder={cartItem.price} />
        <button className='btn btn-submit btn-container'  style={{margin:'24px 288px',padding:'12px'}} type='submit'>Submit</button>
        <NavLink  className='btn clear-btn btn-container' style={{margin:'0px 288px',padding:'8px'}} to='/cart'>Discart Edit</NavLink>
      </form>
      
    </div>
  )
}

export default ItemChange