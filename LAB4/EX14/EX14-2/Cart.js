import React from 'react';
import { useCart } from './Cardcontext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {state.cartItems.length}</p>
      <p>Total Value: ${state.cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
