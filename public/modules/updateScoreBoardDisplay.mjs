import getStoreItem from "./getStoreItem.mjs"
import scoreboardRowTemplate from "./scoreboardRowTemplate.mjs"
    
const updateScoreBoardDisplay = () => {
    const scoreboardEl = document.querySelector('.scoreboard')
    const SCORES_LENGTH = 10
    const currentScores = getStoreItem("playerScores")
    const newScores = new Array(SCORES_LENGTH).fill({})
    
    if(!currentScores || !currentScores.length) {
        scoreboardEl.innerHTML += 
        newScores
            .map((_, i) => scoreboardRowTemplate({index: i})).join('')
    } else {  
        currentScores
            .sort((scoreX, scoreY) => 
                scoreX.score === scoreY.score ?
                    scoreY.speed - scoreX.speed :   
                    scoreY.score - scoreX.score
            )
            .slice(0, 10)
            .forEach((player, i) => newScores[i] = player)

            console.log(newScores)

        scoreboardEl.innerHTML += newScores
            .map((player, i) => 
                scoreboardRowTemplate({
                    index: i,
                    firstName: player.firstName, 
                    initial: player.initial, 
                    points: player.points,
                    speed: player.speed,
                    countryName: player.countryName
                })
            )
            .join('')
    } 
}

export default updateScoreBoardDisplay