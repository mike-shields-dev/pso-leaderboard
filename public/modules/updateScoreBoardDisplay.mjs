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
            .sort((playerA, playerB) => 
                playerA.score === playerB.score ?
                    playerB.speed - playerA.speed :   
                    playerB.score - playerA.score
            )
            .slice(0, 10)
            .forEach((player, i) => newPlayerScores[i] = player)

            console.log(newPlayerScores)

        scoreboardEl.innerHTML = newPlayerScores
            .map((player, i) => 
                scoreboardRowTemplate({
                    index: i,
                    firstName: player.firstName, 
                    initial: player.initial, 
                    score: player.score,
                    speed: player.speed,
                    countryName: player.countryName
                })
            )
            .join('')
    } 
}

export default updateScoreBoardDisplay