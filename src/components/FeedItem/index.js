import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class FeedItem extends React.Component {
  render() {
    const { title, url, date } = this.props;

    return (
      <a className="feed-item" href={url} target="_blank">
        <div className="container">
          <h3 className="feed-item__main">{title}</h3>
          <p className="feed-item__side">{date}</p>
        </div>
      </a>
    );
  }
}

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FeedItem;
