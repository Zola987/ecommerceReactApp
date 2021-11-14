import React from 'react';
import './ProductCart.css';
import { useStateValue } from './StateProvider';

const ProductCart = ({ id, title, image, price }) => {
  const dispatch = useStateValue();

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="productCart">
      <img className="productCart__image" src={image} alt="img" />
      <div className="productCart__info">
        <p className="productCart__title">{title}</p>
        <p className="productCart__price">${price}</p>
        <button onClick={removeItem}>Remove from the Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
