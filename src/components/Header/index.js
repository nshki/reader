import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { getLocalStorage } from '../../helpers';
import './style.css';

class Header extends React.Component {
  componentDidMount() {
    const { setFeedUrls, fetchFeedItems } = this.props;
    const feedUrls = getLocalStorage();
    setFeedUrls(feedUrls);
    fetchFeedItems();
  }

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

const mapToProps = ({
  setFeedUrls,
  fetchFeedItems,
}) => ({
  setFeedUrls,
  fetchFeedItems,
});

export default connect(mapToProps, actions)(Header);
