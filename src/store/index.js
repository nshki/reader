import createStore from 'redux-zero';

const state = {
  feedUrls: [],
  feedItems: [],
};

const store = createStore(state);

export default store;
