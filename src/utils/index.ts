export const localStorageGetItem = (key: string, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue
}
