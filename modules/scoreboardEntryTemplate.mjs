const scoreboardEntryTemplate = ({
    firstName = "", 
    initial = "", 
    score = "", 
    index
}) => `
    <div class="scoreboardEntry">
        <div class="bullet">${index + 1}</div>
        <div class="entryField">${firstName} ${initial}</div>
        <div class="entryField score">${score}</div>
    </div>
`

export default scoreboardEntryTemplate