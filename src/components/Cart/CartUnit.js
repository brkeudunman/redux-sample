import React from 'react'
import { ChevronDown,ChevronUp } from '../../icons'
import { useDispatch } from 'react-redux'
import { removeItem,increaseItem,decreaseItem } from '../features//cartSlice'
import { NavLink } from 'react-router-dom'
import ItemChange from './ItemChange'


const CartUnit = ({id,img,title,price,amount}) => {
  const dispatch = useDispatch()

  const item = {
    id:id,
    img:img,
    title:title,
    price:price,
    amount:amount
  }

  return (
    <article className='cart-item'>
    <img src={img} alt={title} srcset="" />
    <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button onClick={()=>dispatch(removeItem(id))} className='remove-btn'>remove</button>
    </div>
    
    <div>
    
        <button onClick={()=>dispatch(increaseItem({id,amount}))} className='amount-btn'>
            <ChevronUp ></ChevronUp>
        </button>
        
        <p className='amount'>{amount}</p>
        <button onClick={()=>{
          if(amount===1){
            dispatch(removeItem(id))
            return;
          }
          dispatch(decreaseItem({id,amount}))
          }} className='amount-btn'>
          <ChevronDown></ChevronDown>
        </button>
        <div>
          <NavLink 
                    to= '/editItem'
                    state={{item:item}}>
                    Edit
          </NavLink>
        </div>
    </div>
  
    </article>
  )
}

export default CartUnit