const getStoreItem = key => {
    const STORE = window.localStorage
    return JSON.parse(STORE.getItem(key))
}

export default getStoreItem