import { namespace } from '../shared/constants';

/**
 * Given an object, sets a stringified version in localStorage.
 *
 * @param {Object} - data
 * @return {void}
 */
const setLocalStorage = (data) => {
  const { feedUrls, feedItems } = data;
  const stringifiedData = JSON.stringify({ feedUrls, feedItems });
  localStorage.setItem(namespace, stringifiedData);
};

export default setLocalStorage;
