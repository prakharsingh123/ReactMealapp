import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'

const  Cart=(props)=> {
  const cartCtx =useContext(CartContext)

  const cartItemRemoveHandler = (id)=>{
    cartCtx.removeItem(id);

  }; 
  const cartItemAddHandler = (item)=>{
    cartCtx.addItem(item);
  }; 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.length>0;

   const cartItems= (<ul className={classes.cartItems}>{
   cartCtx.items.map((item)=>(<li>
    <CartItem 
    key={item.id} 
    name={item.name} 
    amount ={item.amount}
    price={item.price}
    onRemove= {cartItemRemoveHandler.bind(null,item.id)}
    onAdd = {cartItemAddHandler.bind(null,item)}
    ></CartItem></li>
    ))}</ul>
   );

  return (
    <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
    
     <span>Total Amount</span>
     <span>{totalAmount}</span>
     </div>
    
     <div className={classes.actions}>
     <button className={classes.close} onClick={props.onClose}>Close</button>
     {hasItems &&<  button className={classes.button}>Order</button>}
     </div>
    
      
    </Modal>
  

  )
}

export default Cart
