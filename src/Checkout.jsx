import React from 'react';
import './Checkout.css';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import ProductCart from './ProductCart';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <Header />
      {basket.length === 0 ? (
        <div className="checkout_left">
          <h2 className="checkout_title">Your basket is empty</h2>
          <p>You have no item in your basket. Buy one</p>
        </div>
      ) : (
        <div>
          <h2 className="shoppingbaskettitle">Items in the Basket</h2>
          {basket.map((item) => (
            <ProductCart
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}

      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
