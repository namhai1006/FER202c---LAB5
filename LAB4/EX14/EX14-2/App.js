import React from 'react';
import { CartProvider } from './Cardcontext';
import Cart from './Cart';
import DishesList from './Dishes';

const App = () => {
  return (
    <CartProvider>
      <div>
        <DishesList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
