import getStoreItem from './getStoreItem.mjs'
import setStoreItem from './setStoreItem.mjs'

const deleteLastEntry = () => {
    const existingPlayerScores = getStoreItem("storedScores")
    
    if(existingPlayerScores.length) {
        existingPlayerScores.pop()
        setStoreItem("storedScores", existingPlayerScores)
    }
}

export default deleteLastEntry