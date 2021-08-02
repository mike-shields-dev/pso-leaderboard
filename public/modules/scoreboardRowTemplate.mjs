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
        <div class="scoreboardRow">
            <div class="rank">${index + 1}</div>
            <div class="scoreboardBanner ${(index % 2) ? `odd` : `even`}">
                <div class="flagContainer">
                ${ 
                    foundCountry ? 
                        `<img class="flag" src=${foundCountry.flag} />`
                    :   ""
                }
                </div>
                <div class="entryField name">${firstName} ${initial}</div>
                <div class="entryField score">${score}</div>
                <div class="entryField speed">${speed}</div>
            </div>
        </div>
    `
}

export default scoreboardRowTemplate