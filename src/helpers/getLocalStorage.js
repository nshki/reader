import { namespace } from '../shared/constants';

/**
 * Gets saved data from localStorage.
 *
 * @return {Object}
 */
const getLocalStorage = () => {
  const stringifiedData = localStorage.getItem(namespace);
  return JSON.parse(stringifiedData);
};

export default getLocalStorage;
