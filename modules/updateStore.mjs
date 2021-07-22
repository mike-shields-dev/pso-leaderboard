import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'
import formDataToObject from './formDataToObject.mjs' 

const updateStore = playerScoreFormData => {
    const playerScores = getStoreItem("playerScores")
    const playerScoreObj = formDataToObject(playerScoreFormData)

    playerScores ? 
        setStoreItem("playerScores", [...playerScores, playerScoreObj]) : 
        setStoreItem("playerScores", [playerScoreObj])
}

export default updateStore