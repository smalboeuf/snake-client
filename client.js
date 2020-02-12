const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SM");

    let timer = 50;

    // for (let i = 0; i < 10; i++) {

    //   setTimeout(() => {
    //     conn.write("Move: up");

    //   }, timer);

    //   timer += 50;
    // }

    // for (let i = 0; i < 10; i++) {

    //   setTimeout(() => {
    //     conn.write("Move: left");

    //   }, timer);

    //   timer += 50;
    // }
    
    

  });

  

  return conn;
}

module.exports = { connect };