import updateStore from './modules/updateStore.mjs'
import deleteLastEntry from './modules/deleteLastEntry.mjs'
import broadcastMessage from './modules/broadcastMessage.mjs'
import clearStore from './modules/clearStore.mjs'
import capitalizeWords from './modules/capitalizeWords.mjs'

const form = document.querySelector("#playerScoreForm")

form.addEventListener("submit", event => {
    event.preventDefault()
    const playerScoreForm = event.target
    const playerScoreFormData = new FormData(playerScoreForm)

    updateStore(playerScoreFormData)
    broadcastMessage("store updated")
    form.reset()

    const inputFirstName = document.querySelector('#inputFirstName') 
    inputFirstName.focus();
})

const textInputs = document.querySelectorAll('[type=text]')

textInputs.forEach(textInput => 
    textInput
        .addEventListener("keyup", function({target: {value}}) { 
            this.value = capitalizeWords(this.value)
        })
)


const bttnDeleteAll = document.querySelector('#bttnDeleteAll')
bttnDeleteAll.addEventListener('click', event => {
    clearStore()
    broadcastMessage("store updated")
})

const bttnUndo = document.querySelector('#bttnUndo')
bttnUndo.addEventListener('click', event => {
    deleteLastEntry()
    broadcastMessage("store updated")
})