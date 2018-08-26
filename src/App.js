import React from 'react';
import { Provider } from 'redux-zero/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Header, Footer } from './components';
import { Feed, Manage, Import } from './views';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={Feed} />
            <Route path="/source/" component={Feed} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/import" component={Import} />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
