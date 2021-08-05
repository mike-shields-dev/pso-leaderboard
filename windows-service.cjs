// This file registers C:\\pso-leaderboard\\server.js,
// as a Window Service.
// Please visit https://www.npmjs.com/package/node-windows
// for more information.

const Service = require('node-windows').Service;
 
const svc = new Service({
  name:'PSO Leaderboard',
  description: 'The PSO Leaderboard localhost server',
  script: 'C:\\pso-leaderboard\\server.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start();
});
 
svc.install();