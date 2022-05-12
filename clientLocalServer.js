const net = require('net');

// establishes a connection with the server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: KOC');
    setInterval(() => conn.write('Move: up'), 1000)
    setInterval(() => conn.write('Move: right'), 2000)
    console.log('Server connected.')
  })

  // if registered another connect callback?
  conn.on('connect', () => {
    conn.write('Move: up');
  });

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