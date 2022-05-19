import config from "./config";

class Api {
  constructor(config) {
    this.url = config.url;
  }

  coinsData(num) {
    const result = fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        return data.slice(0, num);
      });

    return result;
  }
}

const api = new Api(config);

export default api;
