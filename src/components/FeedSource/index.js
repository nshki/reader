import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { Container, Heading, Action } from './style';

class FeedSource extends React.Component {
  handleRemove = (name) => {
    const { removeFeedSource, fetchFeedItems, updateLoadProgress } = this.props;
    removeFeedSource(name);
    fetchFeedItems(updateLoadProgress);
  };

  render() {
    const { name, sourceNum } = this.props;

    return (
      <Container>
        <Heading>{name}</Heading>
        <Action
          to={`/source/${sourceNum}`}
          aria-label="View"
        >
          <i className="fa fa-search" />
        </Action>
        <Action
          as="button"
          onClick={() => this.handleRemove(name)}
          aria-label="Remove"
          altColor
        >
          <i className="fa fa-trash" />
        </Action>
      </Container>
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
