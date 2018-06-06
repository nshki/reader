import createStore from 'redux-zero';

const state = {
  feedUrls: [],
  feedItems: [],
  loadProgress: 1,
};

const store = createStore(state);

export default store;
