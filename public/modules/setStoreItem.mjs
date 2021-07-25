const setStoreItem = (key, value) => {
    const store = window.localStorage
    store.setItem(key, JSON.stringify(value))
}

export default setStoreItem