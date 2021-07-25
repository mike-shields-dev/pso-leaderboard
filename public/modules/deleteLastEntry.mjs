import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'

const deleteLastEntry = () => {
    const existingPlayerScores = getStoreItem("playerScores")
    
    if(existingPlayerScores.length) {
        existingPlayerScores.pop()
        setStoreItem("playerScores", existingPlayerScores)
    }
}

export default deleteLastEntry