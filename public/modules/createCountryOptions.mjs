import countriesData from '../assets/data/countriesData.mjs'

const createCountryOptions = async () => {
    const domFragment = new DocumentFragment
    
    countriesData.forEach(country => {
        const option = document.createElement("option")
        option.value = country.name
        option.innerText = country.name
        domFragment.appendChild(option)
    })
    return domFragment
}

export default createCountryOptions