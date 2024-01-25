import React from 'react';
import { useCart } from './Cardcontext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, cartValue } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Value: ${cartValue}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
