import React from 'react';
import PropTypes from 'prop-types';

class FeedItem extends React.Component {
  render() {
    const { title, url, date } = this.props;

    return (
      <a className="feed-item" href={url} target="_blank">
        <span className="feed-item__main">{title}</span>
        <span className="feed-item__side">{date}</span>
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
