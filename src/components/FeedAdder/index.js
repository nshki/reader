import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class FeedAdder extends React.Component {
  state = { inputVal: '' };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (e) => {
    const { inputVal } = this.state;
    const { submitInputVal, fetchFeedItems, updateLoadProgress } = this.props;
    e.preventDefault();
    submitInputVal(inputVal);
    fetchFeedItems(updateLoadProgress);
    this.setState({ inputVal: '' });
  };

  render() {
    const { inputVal } = this.state;

    return (
      <form className="feed-adder" onSubmit={this.handleSubmit}>
        <div className="container">
          <input
            className="feed-adder__input"
            type="url"
            placeholder="Enter RSS URL"
            value={inputVal}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const mapToProps = ({
  submitInputVal,
  fetchFeedItems,
  updateLoadProgress,
}) => ({
  submitInputVal,
  fetchFeedItems,
  updateLoadProgress,
});

export default connect(mapToProps, actions)(FeedAdder);
