import React from 'react';
import parseOPML from 'node-opml-parser';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class FeedAdder extends React.Component {
  state = { inputVal: '', importSources: false };

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

  handleUpload = (e) => {
    const { uploadSources, fetchFeedItems, updateLoadProgress } = this.props;
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        parseOPML(fileReader.result, (err, items) => {
          if (err) {
            console.error(err);
            return;
          }
          uploadSources(items);
          fetchFeedItems(updateLoadProgress);
        });
      };
      fileReader.readAsText(file);
    }
  };

  toggleClick = (e) => {
    e.preventDefault();
    const { importSources } = this.state;
    this.setState({ importSources: !importSources });
  };

  renderInput = () => {
    const { inputVal, importSources } = this.state;
    if (!importSources) {
      return (
        <input
          className="feed-adder__input"
          type="url"
          placeholder="Enter RSS URL"
          value={inputVal}
          onChange={this.handleChange}
        />
      );
    } else {
      return (
        <input
          className="feed-adder__input"
          type="file"
          placeholder="Upload OPML file"
          onChange={this.handleUpload}
        />
      );
    }
  };

  renderToggle = () => {
    const { importSources } = this.state;
    const text = importSources ? 'URL?' : 'Import?';
    return (
      <button
        className="feed-adder__toggle"
        onClick={this.toggleClick}
      >
        {text}
      </button>
    );
  };

  render() {
    return (
      <form className="feed-adder" onSubmit={this.handleSubmit}>
        <div className="container">
          {this.renderInput()}
          {this.renderToggle()}
        </div>
      </form>
    );
  }
}

const mapToProps = ({
  submitInputVal,
  fetchFeedItems,
  updateLoadProgress,
  uploadSources,
}) => ({
  submitInputVal,
  fetchFeedItems,
  updateLoadProgress,
  uploadSources,
});

export default connect(mapToProps, actions)(FeedAdder);
