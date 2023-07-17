const axios = require('axios');

module.exports = async () => {
  try {
    const apiTemperaments = await axios
      .get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)
      .then((response) => response.data);
    let filteredTemperaments = [];
    apiTemperaments.forEach((e) => {
      let temperaments = e.temperament?.split(', ');
      temperaments?.forEach((el) => {
        if (!filteredTemperaments.includes(el)) {
          filteredTemperaments.push(el);
        }
      });
    });
    return filteredTemperaments;
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
