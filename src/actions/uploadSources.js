import { setLocalStorage } from '../helpers';

/**
 * Given an array of objects, adds unique feed sources to the store.
 *
 * @param {Object} - state
 * @param {Array<Object>} - items
 * @return {Object}
 */
const uploadSources = (state, items) => {
  const { feedUrls } = state;
  let newFeedUrls = [...feedUrls];

  if (feedUrls && items.length > 0) {
    items.forEach((item) => {
      const feedUrl = item;
      if (newFeedUrls.indexOf(feedUrl) === -1) {
        newFeedUrls.push(feedUrl);
      }
    });
    setLocalStorage({ ...state, feedUrls: newFeedUrls });
    return { feedUrls: newFeedUrls };
  }

  return state;
};

export default uploadSources;
