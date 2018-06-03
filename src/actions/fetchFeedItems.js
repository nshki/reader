import { rssParser, corsProxy } from '../shared/constants';
import moment from 'moment';

/**
 * Given a list of URLs, parses the RSS from each one (removes the URL from the
 * list if the parser errors out) and adds each item to the store.
 *
 * @param {Object} - state
 * @return {Object}
 */
const fetchFeedItems = async (state) => {
  const { feedUrls } = state;
  let feedItems = [];

  for (let feedUrl of feedUrls) {
    let feed = await rssParser.parseURL(`${corsProxy}/${feedUrl}`);
    feed.items.forEach((feedItem) => {
      feedItem.date = moment(feedItem.pubDate).format('MMM D, YYYY @ h:mma');
    });
    feedItems = feedItems.concat(feed.items);
  }

  return { feedItems };
};

export default fetchFeedItems;
