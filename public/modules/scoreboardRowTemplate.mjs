import countriesData from '../assets/data/countriesData.mjs'

const scoreboardRowTemplate = ({
    index,
    firstName = "", 
    initial = "", 
    points = "- - - -",
    speed = "- -",
    countryName,
}) => {
    const foundCountry = countriesData.find(country => country.name === countryName)
    return `
        <div class="scoreboardRow">
            <div class="rank">${index + 1}</div>

            <div class="scoreboardRowBanner ${(index % 2) ? 'odd' : 'even'}"></div>
            <div class="bannerItem country">
                ${ foundCountry ? `<img class="flag" src=${foundCountry.flag} />`: ""}
            </div>
            <div class="bannerItem name">${firstName} ${initial}</div>
            <div class="bannerItem points">${points}</div>
            <div class="bannerItem speed">${speed}</div>
        </div>
    `
    }

export default scoreboardRowTemplate