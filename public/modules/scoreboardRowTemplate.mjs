const scoreboardRowTemplate = ({
    index,
    firstName = "", 
    initial = "", 
    score = "",
    speed = "",
}) => `
    <div class="scoreboardRow">
        <div class="bullet">${index + 1}</div>
        <div class="entryField name">${firstName} ${initial}</div>
        <div class="entryField score">${score}</div>
        <div class="entryField speed">${speed ? `${speed} mph` : ``}</div>
    </div>
`
export default scoreboardRowTemplate