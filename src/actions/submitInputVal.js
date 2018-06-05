import { setLocalStorage } from '../helpers';

/**
 * Given a string, adds the string to the list of feed URLs if it's not already
 * in it.
 *
 * @param {Object} - state
 * @param {String} - inputVal
 * @return {Object}
 */
const submitInputVal = (state, inputVal) => {
  const { feedUrls } = state;

  if (feedUrls && !feedUrls.includes(inputVal)) {
    const newFeedUrls = [...feedUrls, inputVal];
    setLocalStorage({ ...state, feedUrls: newFeedUrls });
    return { feedUrls: newFeedUrls };
  }

  return state;
};

export default submitInputVal;
