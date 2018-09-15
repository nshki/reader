import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class FeedSource extends React.Component {
  handleRemove = (name) => {
    const { removeFeedSource, fetchFeedItems, updateLoadProgress } = this.props;
    removeFeedSource(name);
    fetchFeedItems(updateLoadProgress);
  };

  render() {
    const { name, sourceNum } = this.props;

    return (
      <div className="feed-source">
        <div className="feed-source__flex">
          <h4 className="feed-source__name">{name}</h4>
          <Link
            className="feed-source__action"
            to={`/source/${sourceNum}`}
            aria-label="View"
          >
            <i className="fa fa-search" />
          </Link>
          <button
            className="feed-source__action feed-source__action--alt"
            onClick={() => this.handleRemove(name)}
            aria-label="Remove"
          >
            <i className="fa fa-trash" />
          </button>
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
  updateLoadProgress,
}) => ({
  removeFeedSource,
  fetchFeedItems,
  updateLoadProgress,
});

export default connect(mapToProps, actions)(FeedSource);
