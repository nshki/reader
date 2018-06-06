import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { FeedAdder, ProgressBar } from '../../components';
import { getLocalStorage } from '../../helpers';
import './style.css';

class Header extends React.Component {
  componentDidMount() {
    const { restoreState, fetchFeedItems, updateLoadProgress } = this.props;
    const savedState = getLocalStorage();

    if (savedState && typeof savedState === 'object') {
      restoreState(savedState);
      fetchFeedItems(updateLoadProgress);
    }
  }

  render() {
    const { loadProgress } = this.props;

    return (
      <header className="header">
        <div className="container">
          <div className="header__flex">
            <h1 className="header__logo">
              <svg className="header__logo__svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 50C36.403 43.597 40 34.913 40 25.858V10C40 4.477 35.523 0 30 0H20C8.954 0 0 8.954 0 20V70H10V50C10 44.477 14.477 40 20 40L30 50ZM15 30C12.239 30 10 27.761 10 25C10 22.239 12.239 20 15 20C17.761 20 20 22.239 20 25C20 27.761 17.761 30 15 30Z" />
                <path d="M70 10H50V25.858C50 34.913 46.403 43.597 40 50L30 60L20 50V80H40V70H60V80H80V20C80 14.477 75.523 10 70 10Z" />
              </svg>
              Reader
            </h1>
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

        <FeedAdder />

        <div className="header__progress-container">
          <ProgressBar progress={loadProgress} />
        </div>
      </header>
    );
  }
}

const mapToProps = ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
}) => ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
});

export default connect(mapToProps, actions)(Header);
