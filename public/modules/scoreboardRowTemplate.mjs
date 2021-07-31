import countriesData from '../assets/data/countriesData.mjs'

const scoreboardRowTemplate = ({
    index,
    firstName = "", 
    initial = "", 
    score = "",
    speed = "",
    countryName = "",
}) => {
    const foundCountry = countriesData.find(country => country.name === countryName)
    return `
        <div class="scoreBoardRow">
            <div class="rank">${index + 1}</div>
            <div class="scoreboardBanner ${(index % 2) ? `odd` : `even`}">
                <div class="flagContainer">
                    ${ foundCountry ? `<img class="flag" src=${foundCountry.flag} />`: ""}
                </div>
                <div class="entryField name">${firstName} ${initial}</div>
                <div class="entryField score">
                    ${score.padStart(4, ``)}<span class="units">pts</span>
                </div>
                <div class="entryField speed">
                    ${speed.padStart(2, 0)}<span class="units">mph</span>
                </div>
            </div>
        </div>
    `
}

export default scoreboardRowTemplate