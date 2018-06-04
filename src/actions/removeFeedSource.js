import { setLocalStorage } from '../helpers';

/**
 * Given a string, removes the string from the list of feed URLs.
 *
 * @param {Object} - state
 * @param {String} - feedUrl
 * @return {Object}
 */
const removeFeedSource = (state, feedUrl) => {
  const { feedUrls } = state;
  const feedUrlPos = feedUrls.indexOf(feedUrl);

  if (feedUrlPos > -1) {
    const newFeedUrls = [
      ...feedUrls.slice(0, feedUrlPos),
      ...feedUrls.slice(feedUrlPos + 1),
    ];

    setLocalStorage(newFeedUrls);

    return { feedUrls: newFeedUrls };
  }
};

export default removeFeedSource;
