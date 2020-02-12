const stdin = process.stdin;
let connection;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {

    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      
      if (key === 'w') {
        connection.write("Move: up");
      }
      if (key === 'a') {
        connection.write("Move: left");
      }
      if (key === 's') {
        connection.write("Move: down");
      }
      if (key === 'd') {
        connection.write("Move: right");
      }
  
    });
  };

  stdin.on('data', (handleUserInput));
  return stdin;
}


module.exports = { setupInput };