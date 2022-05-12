const net = require('net');
const {IP, PORT, NAME} = require('./constantsLocalServer')

// establishes a connection with the server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write(NAME);
    console.log('Server connected.')
  })


  conn.on('data', (data) => {
    console.log('Server: ', data);
  });

  conn.on('end', () => {
    console.log('Server: Come back when you are ready.')
    process.exit();
  });
  
  conn.on('error', () => {});

  return conn;
}

module.exports = {
  connect
};