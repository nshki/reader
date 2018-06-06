import createStore from 'redux-zero';

const state = {
  feedUrls: [],
  feedItems: [],
  loadProgress: 0,
};

const store = createStore(state);

export default store;
