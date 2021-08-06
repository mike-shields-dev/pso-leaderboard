#Installation

##Cloning the project from GitHub

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

To confirm that the remote repository has successfully been cloned to the local machine. Run the following command.

```
dir
```

This command will list all of the sub directories at the root of the C: drive. A directory with a name of `pso-leaderboard` should be listed. 

##Installing Node.js and NPM

Node is a server side "runtime" for JavaScript, it allows JavaScript to access system features that client/browser side JavaScript cannot. 

Installing node will also install NPM (node package manager), allowing us to download and install useful packages written by other developers. 

Visit https://nodejs.org/en/download/
to find out how to install Node and NPM. 

##Make sure NPM dependencies are installed. 

Once Node and NPM are installed. In the CLI, navigate to the project directory.

```
cd pso-leaderboard/
```

In the project directory, run ```npm install``` in the CLI. This will make sure that any NPM packages (if any) that the project depends on, will be installed. At the time of writing this document, there were none but it is good practice.

##Registering server.js as a Windows Service.

Currently, the application is configured to be run by the browser. In order for the browser to access the application files, a local server must be instanciated to serve the neccesary files.

To do this we will use an NPM package called `node-windows` this package will be used to register the file `server.js` as a Windows Service. 

Once this is done, `server.js` should be started automatically on boot up of computer. 

Visit https://www.npmjs.com/package/node-windows for details of how to do set this up. 

Once `node-windows` is set up. Make sure the CLI is in the project directory `'C:/pso-leaderboard/'` register `server.js` using Node to execute the file `windows-service.cjs` by running this command in the CLI.

```
node windows-service.cjs
```

To check that the service has been registered, 