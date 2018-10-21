import { parse, isBefore, isAfter } from 'date-fns';

/**
 * Given an array of feed item objects, sort them by date.
 *
 * @param {Array<Object>} - feedItems
 * @return {Array<Object>}
 */
const sortFeedItems = (feedItems) => {
  return [...feedItems].sort((a, b) => {
    const aDate = parse(a.pubDate);
    const bDate = parse(b.pubDate);

    if (isBefore(aDate, bDate)) {
      return 1;
    } else if (isAfter(aDate, bDate)) {
      return -1;
    } else {
      return 0;
    }
  });
};

export default sortFeedItems;
