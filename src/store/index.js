import createStore from 'redux-zero';

const state = {
  feedUrls: [],
  feedNames: [],
  feedItems: [],
  loadProgress: 0,
};

const store = createStore(state);

export default store;
