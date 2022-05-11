const net = require('net');

// establishes a connection with the server

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Server connected.')
  })

  conn.on('data', (data) => {
    console.log('Server: ', data);
  });

  conn.on('end', () => {
    console.log('Server: Come back when you are ready.')
  });
  
  conn.on('error', () => {});

  return conn;
}

console.log('Connecting....');
connect();

module.exports = {
  connect
};