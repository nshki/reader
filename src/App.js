import React from 'react';
import { Provider } from 'redux-zero/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Header, FeedAdder } from './components';
import { Feed, Manage } from './views';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <FeedAdder />
            <Route exact path="/" component={Feed} />
            <Route path="/manage" component={Manage} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
