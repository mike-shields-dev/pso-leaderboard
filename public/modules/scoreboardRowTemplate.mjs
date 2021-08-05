import countriesData from '../assets/data/countriesData.mjs'

const scoreboardRowTemplate = ({
    index,
    firstName = "",
    initial = "",
    points = "",
    mph = "",
    countryName,
}) => {
    const foundCountry = countriesData.find(country => country.name === countryName)
    const gold = "#FFD700"
    const silver = "#C0C0C0"
    const bronze = "#CD7F32"

    return `
        <div class="scoreboardRow">
            <div class="rank">
            ${index > 2 ? "" :
            `<svg 
                    class="rankStar"
                    enable-background="new 0 0 512 512"  
                    viewBox="0 0 512 512" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fill="${index === 0 ? gold :
                                    index === 1 ? silver :
                                    index === 2 ? bronze : ""}" 
                            d="m497.697 242.93c12.975-12.641 17.554-31.194 11.954-48.41-5.59-17.223-20.199-29.54-38.126-32.145l-110.687-16.083c-5.619-.82-10.474-4.347-12.986-9.435l-49.501-100.308c-8.016-16.235-24.244-26.32-42.352-26.32s-34.336 10.085-42.352 26.32c0 .001-49.501 100.307-49.501 100.307-2.512 5.09-7.367 8.617-12.977 9.435l-110.694 16.083c-17.928 2.606-32.537 14.923-38.124 32.137-5.603 17.225-1.024 35.779 11.947 48.416l80.098 78.084c4.063 3.959 5.917 9.662 4.96 15.249l-18.912 110.254c-3.056 17.85 4.143 35.548 18.788 46.186 14.648 10.643 33.708 12.022 49.744 3.599l99.002-52.052c5.022-2.639 11.019-2.638 16.036-.003l99.01 52.055c16.036 8.424 35.096 7.044 49.744-3.599 14.644-10.639 21.844-28.336 18.788-46.186l-18.913-110.249c-.957-5.592.896-11.295 4.962-15.257zm-114.624 98.398 18.915 110.258c1.131 6.604-1.43 12.904-6.852 16.843-3.01 2.187-6.497 3.342-10.086 3.342-1.573 0-4.587-.199-8.074-2.031l-99.001-52.05c-6.758-3.549-14.353-5.422-21.974-5.422-7.625 0-15.225 1.875-21.975 5.422l-99.011 52.056c-6.801 3.573-13.607 1.985-18.148-1.315-5.424-3.94-7.985-10.24-6.853-16.854l18.911-110.244c2.624-15.334-2.458-30.958-13.591-41.807l-80.094-78.08c-4.806-4.683-6.434-11.28-4.36-17.654 2.073-6.386 7.271-10.764 13.911-11.729l110.69-16.083c15.398-2.246 28.687-11.906 35.567-25.845l49.5-100.304c2.968-6.012 8.745-9.601 15.452-9.601s12.484 3.589 15.452 9.601l49.499 100.303c6.882 13.941 20.174 23.601 35.557 25.845 24.539 3.563 71.538 10.387 110.699 16.084 6.643.965 11.841 5.346 13.91 11.719 2.078 6.387.448 12.982-4.354 17.661l-80.099 78.084c-11.133 10.848-16.214 26.476-13.591 41.801z"/>
                </svg>`
        }
                
                <div 
                    class="rankValue" 
                    style="color: ${index === 0 ? gold :
                                    index === 1 ? silver :
                                    index === 2 ? bronze : "none"}">
                        ${index + 1}
                </div>
            </div>
            <div class="zIndex2 leftAlign leftPadding name">${firstName} ${initial}</div>

            <div class="zIndex1 scoreboardRowBanner ${(index % 2) ? 'odd' : 'even'}"></div>
            <div class="zIndex2 centerAlign country">
                ${foundCountry ? `
                    <img class="flag" src="./assets/images/flags/${foundCountry.flag.split("/").slice(-1)}" />` : ""
                }
            </div>
            <div class="zIndex2 centerAlign points">${points}</div>
            <div class="zIndex2 centerAlign speed">${mph}</div>
        </div>
    `
}

export default scoreboardRowTemplate