import React from 'react';
import { Provider } from 'redux-zero/react';
import store from './store';
import { Feed } from './views';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Feed />
      </Provider>
    );
  }
}

export default App;
