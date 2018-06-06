import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ProgressBar extends React.Component {
  render() {
    const { progress } = this.props;
    const visible = progress > 0 ? 'progress-bar--visible' : '';

    return (
      <div className={`progress-bar ${visible}`}>
        <div
          className="progress-bar__fill"
          style={{ transform: `scale3d(${progress}, 1, 1)` }}
        >
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
