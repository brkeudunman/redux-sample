import React from 'react'
import { useSelector } from 'react-redux'
import CartUnit from '../Cart/CartUnit'
import ShoppingUnit from './ShoppingUnit'

function Shopping() {

  const {isLoading,shoppingList} =useSelector((state)=>(state.shopping))

  if(isLoading){
    return(
      <div className='cart'>
        Loading...
      </div>
    )
  }

  return (
    <div className='cart'>
    
         <div>
            {shoppingList.map((item)=>{
                return(
                        <div>
                            <ShoppingUnit key={item.id} {...item}></ShoppingUnit>
                        </div>)})}

            </div>
    </div>
  )
}

export default Shopping