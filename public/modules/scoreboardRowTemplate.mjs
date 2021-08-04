import countriesData from '../assets/data/countriesData.mjs'

const scoreboardRowTemplate = ({
    index,
    firstName = "", 
    initial = "", 
    points = "",
    mph = "",
    countryName,
}) => {
    const scoreboardRow = document.createElement("div")
        scoreboardRow.className = "scoreboardRow"

    const rank = document.createElement("div")
        rank.className = "rank"
        rank.innerText = index + 1

    const scoreboardRowBanner = document.createElement("div")
        scoreboardRowBanner.className = `
            scoreboardRowBanner 
            ${ index % 2 ? 'odd' : 'even' }
        `

    const country = document.createElement("div")
    country.className = "bannerItem country"
    
    let flagImg
    const foundCountry = countriesData.find(country => country.name === countryName)

    if(foundCountry) {
        flagImg = document.createElement("img")
        flagImg.src = foundCountry.flag
        flagImg.alt = countryName
        country.appendChild(flagImg)
    }

    return `
        <div class="scoreboardRow">
            <div class="rank">${index + 1}</div>

            <div class="scoreboardRowBanner ${(index % 2) ? 'odd' : 'even'}"></div>
            <div class="bannerItem country">
                ${ foundCountry ? `<img class="flag" src=${foundCountry.flag} />`: ""}
            </div>
            <div class="bannerItem name">${firstName} ${initial}</div>
            <div class="bannerItem points">${points}</div>
            <div class="bannerItem speed">${mph}</div>
        </div>
    `
    }

export default scoreboardRowTemplate