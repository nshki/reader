import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedSource from '../FeedSource';
import './style.css';

class FeedSources extends React.Component {
  render() {
    const { feedUrls } = this.props;

    return (
      <React.Fragment>
        {feedUrls.length > 0 &&
          <ul className="feed-sources">
            {feedUrls && feedUrls.map((feedUrl, i) =>
              <li key={`feed-source-${i}`} className="feed-sources__item">
                <FeedSource name={feedUrl} sourceNum={i} />
              </li>
            )}
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

let mapToProps = ({ feedUrls }) => ({ feedUrls });

export default connect(mapToProps, actions)(FeedSources);
