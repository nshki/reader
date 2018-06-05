import moment from 'moment';

/**
 * Given an array of feed item objects, sort them by date.
 *
 * @param {Array<Object>} - feedItems
 * @return {Array<Object>}
 */
const sortFeedItems = (feedItems) => {
  return [...feedItems].sort((a, b) => {
    const aMoment = moment(a.pubDate);
    const bMoment = moment(b.pubDate);

    if (aMoment.isBefore(bMoment)) {
      return 1;
    } else if (aMoment.isAfter(bMoment)) {
      return -1;
    } else {
      return 0;
    }
  });
};

export default sortFeedItems;
