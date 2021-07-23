import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'

const deleteLastEntry = () => {
    const existingPlayerScores = getStoreItem("playerScores")
        
    if(existingPlayerScores) {
        setStoreItem("playerScores", existingPlayerScores.slice(-1))
    }
}

export default deleteLastEntry