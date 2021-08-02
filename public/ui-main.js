import updateStore from './modules/updateStore.mjs'
import deleteLastEntry from './modules/deleteLastEntry.mjs'
import clearStore from './modules/clearStore.mjs'
import capitalizeEachWord from './modules/capitalizeWords.mjs'
import appendCountryOptions from './modules/appendCountryOptions.mjs'

window.addEventListener("load", appendCountryOptions)

document
    .querySelector("form")
    .addEventListener("submit", event => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)        
        
        updateStore(formData)
        
        form.reset()
        
        const firstInput = document.querySelector('form input')
        firstInput.focus();        
    })

document
    .querySelectorAll('[type=text]')
    .forEach(textInput =>
        textInput
            .addEventListener("keyup", function () {
                this.value = capitalizeEachWord(this.value)
        })
    )

document
    .querySelector('#deleteAllBttn')
    .addEventListener('click', clearStore)

document
    .querySelector('#undoBttn')
    .addEventListener('click', deleteLastEntry)