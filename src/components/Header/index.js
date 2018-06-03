import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__flex">
            <h1 className="header__logo">Reader</h1>
            <nav className="header__nav">
              <ul className="header__nav__items">
                <li className="header__nav__item">
                  <Link to="/" className="header__nav__link">Feed</Link>
                </li>

                <li className="header__nav__item">
                  <Link to="/manage" className="header__nav__link">Manage</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
