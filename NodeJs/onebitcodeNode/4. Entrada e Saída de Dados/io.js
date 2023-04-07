const process = require('process');


process.stdin.on('data', (keyboard) => {
  
  process.stdout.write('Texto: ' + keyboard)
  process.exit();
})