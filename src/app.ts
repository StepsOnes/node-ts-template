import dotenv from 'dotenv';
dotenv.config();

function start() {
  const port = process.env.PORT || 3000;
  console.log('App started, listening on port ' + port);
}

start();