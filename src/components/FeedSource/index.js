import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class FeedSource extends React.Component {
  handleRemove = (name) => {
    const { removeFeedSource, fetchFeedItems } = this.props;
    removeFeedSource(name);
    fetchFeedItems();
  };

  render() {
    const { name } = this.props;

    return (
      <div className="feed-source">
        <div className="container">
          <div className="feed-source__flex">
            <h4 className="feed-source__name">{name}</h4>
            <button
              className="feed-source__action"
              onClick={() => this.handleRemove(name)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FeedSource.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapToProps = ({
  removeFeedSource,
  fetchFeedItems,
}) => ({
  removeFeedSource,
  fetchFeedItems,
});

export default connect(mapToProps, actions)(FeedSource);
