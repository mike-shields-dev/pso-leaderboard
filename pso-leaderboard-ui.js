const LOCALSTORE = window.localStorage
const MESSAGEBUS = new BroadcastChannel("MESSAGEBUS")

document
    .querySelector("#playerScoreForm")
    .addEventListener("submit", event => {
        event.preventDefault()
        const playerScoreForm = event.target
        const playerScoreFormData = new FormData(playerScoreForm)

        updateLocalStorage(playerScoreFormData)
})

function updateLeaderBoard() {

}

function updateLocalStorage(playerScoreFormData) {
    const getStorageItem = key => JSON.parse(LOCALSTORE.getItem(key))
    const setStorageItem = (key, value) => LOCALSTORE.setItem(key, JSON.stringify(value))
    
    const objectFrom = playerScoreFormData => {
        const playerScoreObject = {}
        for(const entry of playerScoreFormData) {
            const [key, value] = [entry[0], entry[1]]
            playerScoreObject[key] = value
        }
        return playerScoreObject
    }

    const playerScores = getStorageItem("playerScores")

    if(!playerScores) {
        setStorageItem("playerScores", 
            [objectFrom(playerScoreFormData)]
        )
    } else {
        setStorageItem("playerScores", 
            [...getStorageItem("playerScores"), objectFrom(playerScoreFormData)]
        )
    }
    // broadcastUpdateLeaderBoard()
}





