import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';

class FeedAdder extends React.Component {
  state = { inputVal: '' };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (e) => {
    const { inputVal } = this.state;
    const { submitInputVal, fetchFeedItems } = this.props;
    e.preventDefault();
    submitInputVal(inputVal);
    fetchFeedItems();
  };

  render() {
    return (
      <form className="feed-adder" onSubmit={this.handleSubmit}>
        <input
          className="feed-adder__input"
          type="url"
          placeholder="Enter RSS URL"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapToProps = ({
  feedUrls,
  submitInputVal,
  fetchFeedItems,
}) => ({
  feedUrls,
  submitInputVal,
  fetchFeedItems,
});

export default connect(mapToProps, actions)(FeedAdder);