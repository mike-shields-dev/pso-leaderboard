import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'
import formDataToObject from './formDataToObject.mjs' 

const updateStore = formData => {
    const currentPlayerScores = getStoreItem("storedScores")
    const newPlayerScore = formDataToObject(formData)

    if(currentPlayerScores) {
        setStoreItem("storedScores", [...currentPlayerScores, newPlayerScore]) 
    } else {
        setStoreItem("storedScores", [newPlayerScore])
    }
}

export default updateStore