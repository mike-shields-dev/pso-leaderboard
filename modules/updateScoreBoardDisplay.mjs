import getStoreItem from "./getStoreItem.mjs"
    
const updateScoreBoardDisplay = () => {
    const playerScores = getStoreItem("playerScores")
    const displayEl = document.querySelector('#display')

    if(!playerScores) {
        displayEl.innerHTML = "" 
    } else {
        displayEl.innerHTML = 
            playerScores
                .sort((playerScoreA, playerScoreB) => 
                    playerScoreB.score - playerScoreA.score
                )
                .map(playerScore => 
                    `<div>
                        <span>${playerScore.firstName}</span>
                        <span>${playerScore.initial}</span>
                        <span>${playerScore.score}</span>
                    </div>`
                )
                .join('')
    }
}

export default updateScoreBoardDisplay