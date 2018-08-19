import React from 'react';
import { FeedItems } from '../../components';

class Feed extends React.Component {
  render() {
    return (
      <FeedItems pathname={this.props.location.pathname} />
    );
  }
}

export default Feed;
