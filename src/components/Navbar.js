
import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const {unitAmount} = useSelector((store)=>store.cart)

    return (
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <NavLink to='/' >
                    <div className="home-button">
                        Home
                    </div>
                </NavLink>
               
                <NavLink to='/cart'>
                    <div className="nav-container">
                        <CartIcon></CartIcon>
                        <div className="amount-container">
                                <p className="total-amount">{unitAmount}</p>
                        </div>  
                    </div>
                </NavLink>
            </div>
           
        </nav>
    )
}

export default Navbar