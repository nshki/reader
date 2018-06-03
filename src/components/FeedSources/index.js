import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedSource from '../FeedSource';
import './style.css';

class FeedSources extends React.Component {
  render() {
    const { feedUrls } = this.props;

    return (
      <ul className="feed-sources">
        {feedUrls.map((feedUrl, i) =>
          <li key={`feed-source-${i}`} className="feed-sources__item">
            <FeedSource name={feedUrl} />
          </li>
        )}
      </ul>
    );
  }
}

let mapToProps = ({ feedUrls }) => ({ feedUrls });

export default connect(mapToProps, actions)(FeedSources);
