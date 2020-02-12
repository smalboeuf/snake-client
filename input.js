const stdin = process.stdin;
const {RIGHT, LEFT, UP, DOWN, WEEEE, NYOOOM} = require('./constants');

let connection;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (key) => {


      //To exit
      if (key === '\u0003') {
        process.exit();
      }
      //Controls
      if (key === 'w') {
        connection.write(UP);
      }
      if (key === 'a') {
        connection.write(LEFT);
      }
      if (key === 's') {
        connection.write(DOWN);
      }
      if (key === 'd') {
        connection.write(RIGHT);
      }
      
      //Fun Messages
      if(key === 'm') {
        connection.write(WEEEE);

      }

      if(key === 'n') {
        connection.write(NYOOOM);
      }
  
  };

  stdin.on('data', (handleUserInput));
  return stdin;
}


module.exports = { setupInput };