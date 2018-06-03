import React, { Component } from 'react';
import Parser from 'rss-parser';
import moment from 'moment';

class App extends Component {
  state = { inputVal: '', feeds: [], items: [] };

  parser = new Parser();
  corsProxy = 'https://cors-anywhere.herokuapp.com';
  namespace = 'rss-reader';
  localFeeds = `${this.namespace}-feeds`;

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputVal, feeds } = this.state;
    if (!feeds.includes(inputVal)) {
      this.setState({ feeds: [...feeds, inputVal] }, () => {
        const feedString = JSON.stringify(this.state.feeds);
        localStorage.setItem(this.localFeeds, feedString);
      });
    }
  };

  componentDidMount() {
    const localFeeds = localStorage.getItem(this.localFeeds);
    const feedString = JSON.parse(localFeeds);
    if (Array.isArray(feedString)) {
      this.setState({ feeds: feedString });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { feeds } = this.state;
    const newFeeds = feeds.filter((x) => !prevState.feeds.includes(x));

    newFeeds.forEach((feed) => {
      this.parser.parseURL(`${this.corsProxy}/${feed}`, (err, feed) => {
        const { items } = this.state;
        this.setState({ items: items.concat(feed.items) });
      });
    });
  }

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter RSS URL"
            onChange={this.handleChange}
          />
        </form>

        <ul>
          {items.map((item, i) =>
            <li key={`item-${i}`}>
              <a href={item.link} target="_blank">{item.title}</a><br />
              {moment(item.pubDate).format('MMM D, YYYY')}
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
