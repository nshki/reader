import { namespace } from '../shared/constants';

/**
 * Given an object, sets a stringified version in localStorage.
 *
 * @param {Object} - data
 * @return {void}
 */
const setLocalStorage = (data) => {
  let { feedUrls, feedItems } = data;

  // Limit feed items so we don't go over localStorage quota.
  feedItems = feedItems.slice(0, 1000);

  const stringifiedData = JSON.stringify({ feedUrls, feedItems });
  localStorage.setItem(namespace, stringifiedData);
};

export default setLocalStorage;
