import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-logo">
            <a href="/" className="logo-text">The Coffee House</a>
          </div>
          <div className="header-menu">
            <nav>
              <ul>
                <li><Link to="/products">Sản phẩm</Link></li>
                <li><Link to="/promotion">Khuyến mãi</Link></li>
                <li><Link to="/store">Cửa hàng</Link></li>
                <li><Link to="/blog">Chuyện nhà</Link></li>
              </ul>
            </nav>
          </div>
          <div className="header-icons">
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <Link to="/cart" className="header-cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/account" className="header-account">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
