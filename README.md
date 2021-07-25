# Penalty Shootout Leaderboard

This is the National Football Museum's Penalty Shootout Leaderboard Application.

The application has been created to improve the way that visitor's scores/results from using the Penalty Shootout Interactive Exhibit are presented. 

The current leaderboard consists of a magnetic whiteboard/easel that the Museum Assistants manually update throughout the day, using whiteboard markers and writeable magnetic strips (think Top Gear).

The request was made to see if something more professional & visually appealing could be created using Web Technologies. 

There were certain requirements that the application needed to meet: 

- Run on a single computer. 
- Not depend on an external server.
- Not be connected to the LAN (unless remote start-up & shutdown is required)
- Have a small screen with keyboard and mouse, for the UI, where staff can enter each players score.
- Have a larger screen for the display of the Leaderboard. 
- Use hardware/equipment that the museum already has. 
- Automatically start-up when the computer boots, with each screen displaying content in kiosk mode.
- Allow staff to enter a players first name(s), last initial, points scored & fastest ball speed.  
- Allow staff to revert/undo the last entry to the leaderboard incase of typos or other mistakes.
- Allow staff to clear all of the data. 
- Have data persist for >= 24 hours.
- Not store sensitive visitor data e.g full name, email addresses etc.   
- List player scores in order of points scored, or if multiple scores are the same, then in order of fastest ball speed. 
- Display the content in a visually appealing way, that will hopefully improve the visitor experience and entice more visitors to play the game.

### Local Storage API
\
As the data set would never be very large & only text based, I decided that I would use the Local Storage API. This would allow persistance of data without the need to use an external or locally running server. 

This also had the benefit of being accessible from multiple tabs and/or instances of the same browser on the same computer.

This may prove to be inadequate later on though, as the data is not completely invulnerable to deletion or corruption by various unintended means. A real life test of the application will be needed to determine this.  

### Broadcast Channel API
\

