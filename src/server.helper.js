
/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  
  if (port >= 0) {
    // port number
    return port;
  }
  
  return false;
};
  
/**
   * Event listener for HTTP server "error" event.
   */
  
const onError = (error, port) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  const bind = typeof port === 'string' ? `Pipe ${  port}` : `Port ${  port}`;
  
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind  } requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind  } is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
  
  
/**
   * Event listener for HTTP server "listening" event.
   */
  
const onListening = (server) => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${  addr}` : `port ${  addr.port}`;
  console.log(`Server Started Listening on ${  bind}`);
};

  
module.exports = {
  onListening,
  onError,
  normalizePort,
};

