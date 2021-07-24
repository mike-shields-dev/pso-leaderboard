import updateStore from './modules/updateStore.mjs'
import deleteLastEntry from './modules/deleteLastEntry.mjs'
import broadcastMessage from './modules/broadcastMessage.mjs'
import clearStore from './modules/clearStore.mjs'

const form = document.querySelector("#playerScoreForm")
const inputFirstName = document.querySelector('#firstName') 

form.addEventListener("submit", event => {
    event.preventDefault()
    const playerScoreForm = event.target
    const playerScoreFormData = new FormData(playerScoreForm)

    updateStore(playerScoreFormData)
    broadcastMessage("store updated")
    form.reset()
    
    firstName.focus();
})

const bttnClearStore = document.querySelector('#bttnClearStore')
bttnClearStore.addEventListener('click', event => {
    clearStore()
    broadcastMessage("store updated")
})

const bttnDeleteLastEntry = document.querySelector('#bttnDeleteLastEntry')
bttnDeleteLastEntry.addEventListener('click', event => {
    deleteLastEntry()
    broadcastMessage("store updated")
})