const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {

    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
  
    });
  };

  stdin.on('data', (handleUserInput));
  return stdin;
}


module.exports = { setupInput };