import submitInputVal from './submitInputVal';
import fetchFeedItems from './fetchFeedItems';
import removeFeedSource from './removeFeedSource';
import restoreState from './restoreState';

const actions = (store) => ({
  submitInputVal,
  fetchFeedItems,
  removeFeedSource,
  restoreState,
});

export default actions;
