// Setting up user input (stdin)
const {MOVE_KEYS} = require('./constantsLocalServer')
let connection;

const setupInput = (conn) => {
  // re-assign connection to conn object so that it can use conn object to write input to the server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // below is the stdin listener(.on) and sends message to the server
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // to make sure that if Ctrl + C is input, the system will exit the process
  if (key === MOVE_KEYS.exit) {
    console.log('Come back when you have time, loser.')
    process.exit();
  }
  if (key === MOVE_KEYS.up) {
    connection.write("Move: up");
  }
  if(key === MOVE_KEYS.left) {
    connection.write('Move: left');
  }
  if (key === MOVE_KEYS.down) {
    connection.write('Move: down');
  }
  if (key === MOVE_KEYS.right) {
    connection.write('Move: right');
  }
  if(key === '\u0069') {
    connection.write('Say: OlaOlaOlaOla!!!');
  }
};

module.exports = {
  setupInput
}