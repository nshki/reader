import { rssParser, corsProxy } from '../shared/constants';
import { sortFeedItems, setLocalStorage } from '../helpers';
import moment from 'moment';

/**
 * Given a list of URLs, parses the RSS from each one (removes the URL from the
 * list if the parser errors out) and adds each item to the store.
 *
 * @param {Object} - state
 * @param {Function} - updateLoadProgress
 * @return {Object}
 */
const fetchFeedItems = async (state, updateLoadProgress) => {
  const { feedUrls } = state;
  let feedItems = [];
  let feedNames = {};

  if (feedUrls) {
    let i = 0;

    for (let feedUrl of feedUrls) {
      i += 1;
      updateLoadProgress(i / feedUrls.length);

      try {
        let feed = await rssParser.parseURL(`${corsProxy}/?url=${feedUrl}`);
        feedNames[feedUrl] = feed.title;
        feed.items.forEach((feedItem) => {
          feedItem.date = moment(feedItem.pubDate).format('MMM D, YYYY @ h:mma');
          feedItem.source = feedUrl;
        });
        feedItems = feedItems.concat(feed.items);
      } catch (err) {
        continue;
      }
    }
  }

  updateLoadProgress(0);
  feedItems = sortFeedItems(feedItems);
  setLocalStorage({ ...state, feedItems, feedNames });
  return { feedItems, feedNames };
};

export default fetchFeedItems;
