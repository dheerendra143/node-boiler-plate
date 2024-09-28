const http = require('http');
const app = require('./src/app/app');
const port = 3000;
const { onError, onListening, normalizePort } = require('./server.helper');

/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.PORT || port);
app.set('port', PORT);

/**
 * Create a http server.
 */
const server = http.createServer(app);

/**
 * Start the server on the given PORT.
 */
server.listen(PORT);


/**
 * Call function on erver error.
 */
server.on('error', (error) => {
  onError(error, PORT);
});

/**
 * Call function on server execution
 */
server.on('listening', () => {
  onListening(server);
  /**
    * you can function here which you want to get executed when server start
    */
});

module.exports = server;
