const alertMessage = 
`Are you sure you want to delete ALL names from the scoreboard?
this action cannot be undone!`

const clearStore = () => window.confirm(alertMessage) && window.localStorage.clear() 

export default clearStore