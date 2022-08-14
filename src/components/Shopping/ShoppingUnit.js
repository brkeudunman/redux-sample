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
    <div>{title}{price}<button onClick={()=>dispatch(addItem(item))}>Add to cart</button></div>
  )
}

export default ShoppingUnit