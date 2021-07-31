import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'
import formDataToObject from './formDataToObject.mjs' 

const updateStore = formData => {
    const currentPlayerScores = getStoreItem("playerScores")
    const newPlayerScore = formDataToObject(formData)

    if(currentPlayerScores) {
        setStoreItem("playerScores", [...currentPlayerScores, newPlayerScore]) 
    } else {
        setStoreItem("playerScores", [newPlayerScore])
    }
}

export default updateStore