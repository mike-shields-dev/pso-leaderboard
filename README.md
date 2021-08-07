##Installation

###Cloning the project from GitHub

These instructions are written for installation of the project onto a Windows Machine, therefore some of the instructions are not applicable to other operation systems.

In order to download this application to the host machine. You will need to install git.

Visit: https://git-scm.com/ for details of how to do this.

Once you have installed git you can use a CLI tool to "clone" the remote repository from GitHub to the host machine by executing the command below. 

Before running this command, in the CLI, make sure you are at the root of the C: drive so that the repo is cloned in this location. 

If the application needs to be installed in another directory other that the root of the C: drive, the `script` path in the file `window-service.cjs` will need to be ammended to reflect this change. 

You will also need to be signed in to the nfmdevelopers GitHub account on the local machine to be granted permission to clone the repository.

```
git clone https://github.com/nfmdevelopers/pso-leaderboard.git
```

To confirm that the remote repository has successfully been cloned to the local machine. While still at the root of the C: drive, execute the following command.

```
dir
```

This command will list all of the sub directories at the root of the C: drive. A directory with a name of `pso-leaderboard` should be listed. 

###Installing Node.js and NPM

Node is a server side "runtime" for JavaScript, it allows JavaScript to access system features that client/browser side JavaScript cannot. 

Installing node will also install NPM (node package manager), allowing us to download and install useful packages written by other developers. 

Visit https://nodejs.org/en/download/
to download the Node.js Windows Installer. 

###Make sure NPM dependencies are installed. 

Once Node and NPM are installed. In the CLI, navigate to the project directory.

```
cd pso-leaderboard/
```

In the project directory, run the command ```npm install``` in the CLI. This will make sure that any NPM packages (if any) that the project depends on, will be installed. (At the time of writing this document, there were none but it is good practice to do this.)

###Registering server.js as a Windows Service.

The application is a web application and is run in the browser (Chrome). In order for the browser to access the application files, a localhost server must be started up in the background, to serve the neccesary files.

To do this we will use an NPM package called `node-windows` this package will be used to register the file `server.js` as a Windows Service. 

Once this is done, Windows should automatically start up `server.js` when the machine is booted up.

Visit https://www.npmjs.com/package/node-windows 

Once `node-windows` is set up. Make sure to navigate the CLI to the project directory `'C:/pso-leaderboard/'`.

To register `server.js` as a Windows service, Node needs to run the file `windows-service.cjs`, this is done by executing the following command in the CLI.

```
node windows-service.cjs
```

To check that the service has been registered and is running in the background, open up the Services App in Windows and search the list of services for "PSO Leaderboard". 

The status of this service should be "running". If it isn't, select the service in the list, then click the "Action" menu at the top of the application window, a drop down menu will expand, select "start". Confirm that the status of the service is now set to "running".

###Starting the Application

* The PSO Leaderboard Editor

    Launch chrome and navigate to this address:

    [localhost:8080/ui.html]() <br><br>

* The PSO Leaderboard

    Launch a second instance of chrome and navigate to this address: 

    [localhost:8080/display.html]()

Assuming that the computer is set up with a second display. Manually drag each browser window to the desired display and toggle full screen mode by pressing F11. 

The Application is now ready to use. 

##More Info

This is the National Football Museum's Penalty Shootout Leaderboard Application.

The application has been created to improve the display of visitor's scores/results from using the Penalty Shootout Interactive Exhibit. 

The previous leaderboard consisted of a magnetic whiteboard/easel that the Museum Assistants manually updated throughout the day, using whiteboard markers and writeable magnetic strips (think Top Gear).

The request was made to see if something more professional & visually appealing could be created using Web Technologies. 

####Requirements: 

- Run on a single computer. 
- Not depend on an external server.
- Not be connected to the LAN (unless remote start-up & shutdown is required)
- Hardware should consist of a small screen with keyboard and mouse, for the UI, where staff can enter each players scores and a larger screen for the display of the "leaderboard". 
- Use hardware assets, that the museum already has. 
- Automatically start-up when the computer boots, with each screen displaying content in kiosk mode.
- Allow staff to enter a players first name(s), last initial, nationality, points scored & fastest ball speed.  
- Allow staff to revert/undo the last entry to the leaderboard incase of typos or other mistakes.
- Allow staff to clear all of the data. 
- Have data persist for >= 24 hours.
- Not store sensitive visitor data e.g full name, email addresses etc.   
- List player scores in order of points scored, or if multiple scores are the same, then in order of fastest ball speed. 
- Display the content in a visually appealing way, that will hopefully improve the visitor experience and entice more visitors to play the game.

####Local Storage API

As the data set would never be very large & only text based, the Local Storage API is used to store the score data. This allows persistance of data without the need to use an external or locally running server. 

Local Storage is accessible from multiple tabs and/or instances of the same browser and domain.

This may prove to be inadequate, as the data is not completely invulnerable to deletion or corruption by various unintended means. A real life test of the application will be needed to determine this. 