import getStoreItem from "./getStoreItem.mjs"
import scoreboardRowTemplate from "./scoreboardRowTemplate.mjs"
    
const updateScoreBoardDisplay = () => {
    const scoreboard = document.querySelector('.scoreboard')
    const scoreboardHeader = document.querySelector('.scoreboardHeader')
    const SCORES_LENGTH = 10
    const storedScores = getStoreItem("storedScores")
    const newScores = new Array(SCORES_LENGTH).fill({})
    
    scoreboard.innerHTML = ""
    
    if(storedScores?.length) {
        storedScores
            .sort((scoreX, scoreY) => 
                scoreX.points !== scoreY.points ?
                    scoreY.points - scoreX.points
                :   scoreY.mph - scoreX.mph 
            )
            .slice(0, 10)
            .forEach((player, index) => newScores[index] = player)
        
        scoreboard.appendChild(scoreboardHeader)
        scoreboard.innerHTML += 
        newScores
            .map((player, index) => 
                scoreboardRowTemplate({
                    index,
                    firstName: player.firstName, 
                    initial: player.initial, 
                    points: player.points,
                    mph: player.mph,
                    countryName: player.countryName
                })
            )
            .join('')

    } else {  
        scoreboard.appendChild(scoreboardHeader)
        scoreboard.innerHTML += 
        newScores
            .map((_, index) => scoreboardRowTemplate({index}))
            .join('')
    } 
}

export default updateScoreBoardDisplay