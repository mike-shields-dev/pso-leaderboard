// This is the root script for display.html

import updateScoreBoardDisplay from './modules/updateScoreBoardDisplay.mjs'

window.addEventListener("DOMContentLoaded", updateScoreBoardDisplay)
window.addEventListener("storage", updateScoreBoardDisplay)