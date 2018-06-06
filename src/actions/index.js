import submitInputVal from './submitInputVal';
import fetchFeedItems from './fetchFeedItems';
import removeFeedSource from './removeFeedSource';
import restoreState from './restoreState';
import updateLoadProgress from './updateLoadProgress';

const actions = (store) => ({
  submitInputVal,
  fetchFeedItems,
  removeFeedSource,
  restoreState,
  updateLoadProgress,
});

export default actions;
