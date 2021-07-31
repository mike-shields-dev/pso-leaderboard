const getStoreItem = key =>
    JSON.parse(window.localStorage.getItem(key))

export default getStoreItem