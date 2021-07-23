import updateScoreBoardDisplay from './modules/updateScoreBoardDisplay.mjs'

const channel = new BroadcastChannel("ui&display")

channel.onmessage = ({data}) => data === "store updated" && updateScoreBoardDisplay()
window.onload = () => updateScoreBoardDisplay()