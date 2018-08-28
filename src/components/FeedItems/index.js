import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedItem from '../FeedItem';
import './style.css';

class FeedItems extends React.Component {
  render() {
    const { feedUrls, feedItems, pathname } = this.props;
    let feedSource = '';
    let filteredItems = feedItems;
    if (pathname.match(/^\/source\/\d+$/g)) {
      const splitPath = pathname.split('/source/');
      const sourceNum = parseInt(splitPath[splitPath.length - 1], 10);
      if (feedUrls[sourceNum]) {
        feedSource = feedUrls[sourceNum];
        filteredItems = feedItems.filter((item) => item.source === feedSource);
      }
    }

    return (
      <React.Fragment>
        {feedSource &&
          <div className="feed-items__source">
            <div className="container">
              <p className="feed-items__source__text">
                Source: {feedSource}
              </p>
            </div>
          </div>
        }
        {filteredItems.length > 0 &&
          <ul className="feed-items">
            {filteredItems.map((feedItem, i) => (
              <li key={`feed-item-${i}`} className="feed-items__item">
                <FeedItem
                  title={feedItem.title}
                  url={feedItem.link}
                  date={feedItem.date}
                />
              </li>
            ))}
          </ul>
        }
        {filteredItems.length === 0 &&
          <div className="container">
            <p className="feed-items__empty">
              No news here! Try adding some sources above.
            </p>
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapToProps = ({ feedUrls, feedItems }) => ({ feedUrls, feedItems });

export default connect(mapToProps, actions)(FeedItems);
