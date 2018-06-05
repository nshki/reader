import React from 'react';
import { Provider } from 'redux-zero/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Header, Footer } from './components';
import { Feed, Manage } from './views';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={Feed} />
            <Route path="/manage" component={Manage} />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
