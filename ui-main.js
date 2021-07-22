import updateStore from './modules/updateStore.mjs'
import broadcastMessage from './modules/broadcastMessage.mjs'
import clearStore from './modules/clearStore.mjs'

const form = document.querySelector("#playerScoreForm")

form.addEventListener("submit", event => {
    event.preventDefault()
    const playerScoreForm = event.target
    const playerScoreFormData = new FormData(playerScoreForm)

    updateStore(playerScoreFormData)
    broadcastMessage("store updated")
    form.reset()
})

const bttnClearStore = document.querySelector('#bttnClearStore')

bttnClearStore.addEventListener('click', event => {
    clearStore()
    broadcastMessage("store updated")
})