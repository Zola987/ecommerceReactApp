import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import img1 from './img/img1.png';

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log('basket content', basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className=" product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
