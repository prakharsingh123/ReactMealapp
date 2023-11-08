import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/CartContext';

const CartButton=(props)=> {
   
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((cartNumber,item)=>{
    return cartNumber + item.amount  },0);


  return (
    <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
   <CartIcon></CartIcon>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}> {numberOfItems}
        </span>    
    </button>
  )
}

export default CartButton;
