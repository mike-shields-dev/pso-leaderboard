import updateStore from './modules/updateStore.mjs'
import deleteLastEntry from './modules/deleteLastEntry.mjs'
import clearStore from './modules/clearStore.mjs'
import capitalizeEachWord from './modules/capitalizeWords.mjs'

const form = document.querySelector("#playerScoreForm")

form.addEventListener("submit", event => {
    event.preventDefault()
    const playerScoreForm = event.target
    const playerScoreFormData = new FormData(playerScoreForm)

    updateStore(playerScoreFormData)    
    
    const firstInputField = document.querySelector('#playerScoreForm input')
    firstInputField.focus();
    form.reset()
})

const textInputs = document.querySelectorAll('[type=text]')

textInputs.forEach(textInput => 
    textInput
        .addEventListener("keyup", function() { 
            this.value = capitalizeEachWord(this.value)
        })
)

const deleteAllBttn = document.querySelector('#deleteAllBttn')
deleteAllBttn.addEventListener('click', event => {
    clearStore()
})

const undoBttn = document.querySelector('#undoBttn')
undoBttn.addEventListener('click', event => {
    deleteLastEntry()
})