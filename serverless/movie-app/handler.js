const fetch = require('node-fetch');
const DOMAIN = process.env.DOMAIN;


const callMovieApi = async (event) => {
  console.log("event: ", event);
  const res = await fetch('http://www.omdbapi.com/?apikey=4a3b711b&s=pippo');
  const data = await res.json();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, HEAD',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(data)
  }
};

module.exports = {
  callMovieApi
}