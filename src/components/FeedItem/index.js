import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Meta } from './style';

class FeedItem extends React.Component {
  render() {
    const { title, url, date } = this.props;

    return (
      <Container href={url} target="_blank">
        <Heading>{title}</Heading>
        <Meta>{date}</Meta>
      </Container>
    );
  }
}

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FeedItem;
