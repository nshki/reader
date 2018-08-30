import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedSource from '../FeedSource';
import './style.css';

class FeedSources extends React.Component {
  render() {
    const { feedUrls, feedNames } = this.props;

    return (
      <React.Fragment>
        {feedUrls.length > 0 &&
          <ul className="feed-sources">
            {feedUrls && feedUrls.map((feedUrl, i) => {
              const feedName = feedNames[feedUrl] || feedUrl;
              return (
                <li key={`feed-source-${i}`} className="feed-sources__item">
                  <FeedSource name={feedName} sourceNum={i} />
                </li>
              );
            })}
          </ul>
        }
        {feedUrls.length === 0 &&
          <div className="container">
            <p className="feed-sources__empty">
              No sources! Try adding some above.
            </p>
          </div>
        }
      </React.Fragment>
    );
  }
}

let mapToProps = ({ feedUrls, feedNames }) => ({ feedUrls, feedNames });

export default connect(mapToProps, actions)(FeedSources);
