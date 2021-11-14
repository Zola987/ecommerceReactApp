import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log('my basket', basket);

  return (
    <nav className="header">
      <h2 className="header__logo">LOGO</h2>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav"></div>
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          {/* {number of items} */}
          <span className="header__optionLineTwo header__productCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
