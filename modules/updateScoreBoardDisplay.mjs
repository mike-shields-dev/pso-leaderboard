import getStoreItem from "./getStoreItem.mjs"
import scoreboardEntryTemplate from "./scoreboardEntryTemplate.mjs"
    
const updateScoreBoardDisplay = () => {
    const SCOREBOARDLENGTH = 10
    const playerScores = getStoreItem("playerScores")
    const scoreboard = document.querySelector('#scoreboard')

    if(!playerScores) {
        scoreboard.innerHTML = new Array(SCOREBOARDLENGTH).fill(null)
        .map((_, i) => scoreboardEntryTemplate({index: i}))
        .join('')
        
    } else {
        const emptyEntriesLength = 10 - playerScores.length 
        const emptyEntriesArray = new Array(emptyEntriesLength).fill({})
        
        scoreboard.innerHTML = playerScores.concat(emptyEntriesArray)
            .sort((playerA, playerB) => playerB.score - playerA.score)
            .map((player, i) => 
                scoreboardEntryTemplate({
                    firstName: player.firstName, 
                    initial: player.initial, 
                    score: player.score, 
                    index: i
                })
            )
            .join('')
    }
}

export default updateScoreBoardDisplay