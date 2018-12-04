const fetch = require('node-fetch');
const url = 'https://randomfox.ca/floof';

module.exports.getFox = async () => {
  const json = await (await fetch(url)).json();
  return json;
}