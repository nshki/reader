import React from 'react';
import parseOPML from 'node-opml-parser';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class FeedImporter extends React.Component {
  state = { statusText: '' };

  handleChange = (e) => {
    const { uploadSources, fetchFeedItems, updateLoadProgress } = this.props;
    const file = e.target.files[0];

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        parseOPML(fileReader.result, (err, items) => {
          if (err) {
            console.error(err);
            this.setState({ statusText: err });
            return;
          }
          uploadSources(items);
          fetchFeedItems(updateLoadProgress);
          this.setState({ statusText: `${items.length} sources imported.` });
        });
      };
      fileReader.readAsText(file);
    } else {
      this.setState({
        statusText: 'Sorry, there was a problem with your file.',
      });
    }
  };

  render() {
    const { statusText } = this.state;

    return (
      <div className="container">
        <p className="feed-importer__text">
          Importing sources via OPML file uploads is currently supported. Please
          select an OPML file below.
        </p>

        <input
          className="feed-importer__input"
          type="file"
          onChange={this.handleChange}
        />

        {statusText.length > 0 &&
          <p className="feed-importer__status">
            {statusText}
          </p>
        }
      </div>
    );
  }
}

const mapToProps = ({
  fetchFeedItems,
  updateLoadProgress,
  uploadSources,
}) => ({
  fetchFeedItems,
  updateLoadProgress,
  uploadSources,
});

export default connect(mapToProps, actions)(FeedImporter);
