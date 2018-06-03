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

  if (!feedUrls.includes(inputVal)) {
    return { feedUrls: [...feedUrls, inputVal] };
  }
};

export default submitInputVal;
