import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { Form, Container, Input } from './style';

class FeedAdder extends React.Component {
  state = { inputVal: '' };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (e) => {
    const { inputVal } = this.state;
    const { submitInputVal, fetchFeedItems, updateLoadProgress } = this.props;
    e.preventDefault();
    submitInputVal(inputVal.trim());
    fetchFeedItems(updateLoadProgress);
    this.setState({ inputVal: '' });
  };

  render() {
    const { inputVal } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Container>
          <Input
            type="url"
            placeholder="Enter RSS URL"
            value={inputVal}
            onChange={this.handleChange}
          />
        </Container>
      </Form>
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
