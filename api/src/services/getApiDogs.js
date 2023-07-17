const axios = require('axios');

module.exports = async () => {
  try {
    const apiDogs = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`
    );
    return apiDogs.data;
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
