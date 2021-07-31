import createCountryOptions from './createCountryOptions.mjs'

async function appendCountryOptions() {
    const countrySelectEl = document.querySelector("#countrySelect")
    const countryOptions = await createCountryOptions()
    countrySelectEl.appendChild(countryOptions)
}

export default appendCountryOptions