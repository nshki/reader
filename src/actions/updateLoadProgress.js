/**
 * Given a float between 0 and 1, sets the load progress of the app.
 *
 * @param {Object} - state
 * @param {Number} - loadProgress
 * @return {Object}
 */
const updateLoadProgress = (state, loadProgress) => {
  const isNum = Number(loadProgress) === loadProgress;
  const inRange = loadProgress >= 0 && loadProgress <= 1;

  if (isNum && inRange) {
    return { ...state, loadProgress };
  }

  return state;
};

export default updateLoadProgress;
