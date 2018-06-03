import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedItem from '../FeedItem';
import './style.css';

class FeedItems extends React.Component {
  render() {
    const { feedItems } = this.props;

    return (
      <ul className="feed-items">
        {feedItems.map((feedItem, i) => (
          <li key={`feed-item-${i}`} className="feed-items__item">
            <FeedItem
              title={feedItem.title}
              url={feedItem.link}
              date={feedItem.date}
            />
          </li>
        ))}
      </ul>
    );
  }
}

const mapToProps = ({ feedItems }) => ({ feedItems });

export default connect(mapToProps, actions)(FeedItems);
