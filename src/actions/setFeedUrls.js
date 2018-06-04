/**
 * Given an array of feed URLs, sets the array in the store.
 *
 * @param {Object} - state
 * @param {Array<String>} - feedUrls
 * @return {Object}
 */
const setFeedUrls = (state, feedUrls) => {
  return { feedUrls };
};

export default setFeedUrls;
