const axios = require("axios");
const responseParser = (res) => res.data;
const errorParser = (res) => {
  return res.response;
};

const get = async (url) => {
  try {
    return responseParser(await axios.get(url));
  } catch (err) {
    return errorParser(err);
  }
};

const post = async (url, payload) => {
  try {
    return responseParser(await axios.post(url, payload));
  } catch (err) {
    return errorParser(err);
  }
};

module.exports = {
  get,
  post,
};
