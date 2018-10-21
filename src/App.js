import React from 'react';
import { Provider } from 'redux-zero/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Header, Footer } from './components';
import { Feed, Manage, Import } from './views';
import GlobalStyle from './reset.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <GlobalStyle />
          <Router>
            <>
              <Header />
              <Route exact path="/" component={Feed} />
              <Route path="/source/" component={Feed} />
              <Route exact path="/manage" component={Manage} />
              <Route exact path="/import" component={Import} />
              <Footer />
            </>
          </Router>
        </>
      </Provider>
    );
  }
}

export default App;
