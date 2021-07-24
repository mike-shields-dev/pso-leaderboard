import getStoreItem from "./getStoreItem.mjs"
import scoreboardRowTemplate from "./scoreboardRowTemplate.mjs"
    
const updateScoreBoardDisplay = () => {
    const scoreboardEl = document.querySelector('#scoreboard')
    const SCOREBOARDLENGTH = 10
    const oldPlayerScores = getStoreItem("playerScores")
    const newPlayerScores = new Array(SCOREBOARDLENGTH).fill({})
    
    if(!oldPlayerScores || !oldPlayerScores.length) {
        scoreboardEl.innerHTML = newPlayerScores
        .map((_, i) => scoreboardRowTemplate({index: i}))
        .join('')
    } else {  
        
        oldPlayerScores
            .sort((playerA, playerB) => playerB.score - playerA.score)
            .slice(0, 11)
            .forEach((player, i) => 
                i < newPlayerScores.length && 
                (newPlayerScores[i] = player)
            )

        scoreboardEl.innerHTML = newPlayerScores
            .map((player, i) => 
                scoreboardRowTemplate({
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