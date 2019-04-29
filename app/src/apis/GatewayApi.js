import fetch from 'node-fetch';

const GatewayApi = {
  get(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
  }
};

export default GatewayApi;