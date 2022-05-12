// Setting up user input (stdin)
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // below is the stdin listener(.on)
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // to make sure that if Ctrl + C is input, the system will exit the process
  if (key === '\u0003') {
    console.log('Come back when you have time, loser.')
    process.exit();
  }
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  if(key === '\u0061') {
    connection.write('Move: left');
  }
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  if (key === '\u0064') {
    connection.write('Move: right');
  }
};

module.exports = {
  setupInput
}