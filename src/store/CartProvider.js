import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
  
    let existingCartItemsIndex = state.items.findIndex((item) => item.id === action.item.id);
    let updatedItems;
  
    if (existingCartItemsIndex !== -1) {
      // Item with the same id exists in the cart
      let existingCartItem = state.items[existingCartItemsIndex];
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
  
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      // Item with the same id doesn't exist in the cart
      updatedItems = [...state.items, action.item];
    }
  
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  

  if (action.type === 'REMOVE') {
    let existingCartItemsIndex = state.items.findIndex((item) => item.id === action.id);
     
    if (existingCartItemsIndex === -1) {
      // Item not found in the cart, return the state as is
      return state;
    }
  
    let existingItem = state.items[existingCartItemsIndex];
    let updatedItems;
  
    if (existingItem.amount > 1) {
      // If the item has more than 1 quantity, decrease the amount
      let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      // If the item has only 1 quantity, remove it from the cart
      updatedItems = state.items.filter(item => item.id !== action.id);
    }
  
    const updatedTotalAmount = state.totalAmount - existingItem.price;
  
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  
  return state;
}  

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
