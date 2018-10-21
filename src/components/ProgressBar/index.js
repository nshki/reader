import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fill } from './style';

class ProgressBar extends React.Component {
  render() {
    const { progress } = this.props;
    const visible = progress > 0;

    return (
      <Container visible={visible}>
        <Fill progress={progress} />
      </Container>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
