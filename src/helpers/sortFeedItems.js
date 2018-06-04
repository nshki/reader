/**
 * Given an array of feed item objects, sort them by date.
 *
 * @param {Array<Object>} - feedItems
 * @return {Array<Object>}
 */
const sortFeedItems = (feedItems) => {
  return [...feedItems].sort((a, b) => {
    if (a.pubDate < b.pubDate) {
      return 1;
    } else if (a.pubDate > b.pubDate) {
      return -1;
    } else {
      return 0;
    }
  });
};

export default sortFeedItems;
