import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'
import formDataToObject from './formDataToObject.mjs' 

const updateStore = playerScoreFormData => {
    const existingPlayerScores = getStoreItem("playerScores")
    const newPlayerScore = formDataToObject(playerScoreFormData)

    if(existingPlayerScores) {
        setStoreItem("playerScores", [...existingPlayerScores, newPlayerScore]) 
    } else {
        setStoreItem("playerScores", [newPlayerScore])
    }
}

export default updateStore