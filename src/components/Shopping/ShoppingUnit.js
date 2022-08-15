import React from 'react'
import { useDispatch } from 'react-redux'

import { addItem } from '../features/cartSlice'

function ShoppingUnit({id,img,title,price,amount}) {

  const dispatch  = useDispatch()

  const item = {
    id:id,
    img:img,
    title:title,
    price:price,
    amount:amount
  }
  return (
    <div className='cart-item'>
      <img src={img}></img>
      <div>
      <h4 className='title'>{title}</h4>
      <h5>${price}</h5>
      </div>      
      <button className='btn' onClick={()=>dispatch(addItem(item))}>Add to cart</button>
    </div>
  )
}

export default ShoppingUnit