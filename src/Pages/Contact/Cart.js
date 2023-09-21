import React from 'react';
import classes from './Cart.module.css'
const Cart = props => {
    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )

}
export default Cart;