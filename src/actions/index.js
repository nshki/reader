import submitInputVal from './submitInputVal';
import fetchFeedItems from './fetchFeedItems';
import removeFeedSource from './removeFeedSource';
import restoreState from './restoreState';
import updateLoadProgress from './updateLoadProgress';
import uploadSources from './uploadSources';

const actions = (store) => ({
  submitInputVal,
  fetchFeedItems,
  removeFeedSource,
  restoreState,
  updateLoadProgress,
  uploadSources,
});

export default actions;
