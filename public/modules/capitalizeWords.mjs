const capitalizeWords = string =>
    string
    .split(" ")
    .map(word => 
        word && 
        word[0].toUpperCase() + 
        word.slice(1).toLowerCase()
    )
    .join(" ")

export default capitalizeWords