import getStoreItem from "./getStoreItem.mjs"
import scoreboardRowTemplate from "./scoreboardRowTemplate.mjs"
    
const updateScoreBoardDisplay = () => {
    const scoresEl = document.querySelector('#scores')
    const SCOREBOARDLENGTH = 10
    const currentScores = getStoreItem("playerScores")
    const newScores = new Array(SCOREBOARDLENGTH).fill({})
    
    if(!currentScores || !currentScores.length) {
        scoresEl.innerHTML = 
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

        scoresEl.innerHTML = newScores
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