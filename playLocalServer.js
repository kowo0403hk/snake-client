const {connect} = require('./clientLocalServer');
const {setupInput} = require('./inputLocalServer');

console.log('Connecting....');

connect();
setupInput();