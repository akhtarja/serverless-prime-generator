import fetch from 'node-fetch';

const GatewayApi = {
  get(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) return ({ error: data.error })
        return data;
      })
      .catch((error) => {
        return({ error });
      });
  }
};

export default GatewayApi;
