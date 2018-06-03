import React from 'react';
import { FeedAdder, FeedItems } from '../../components';

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FeedAdder />
        <FeedItems />
      </React.Fragment>
    );
  }
}

export default Feed;
