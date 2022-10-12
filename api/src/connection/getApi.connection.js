const axios = require('axios');
require('dotenv').config();


const getApiDogs = async () => {
    const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`);
    return apiDogs.data;
};

getApiTemperaments = async () => {
    const apiTemperaments = await axios
        .get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)
        .then(response => response.data);
    let filteredTemperaments = [];
    apiTemperaments.forEach(e => {
        let temperaments = e.temperament?.split(', ');
        temperaments?.forEach(el => {
            if (!filteredTemperaments.includes(el)) {
                filteredTemperaments.push(el)
            };
        });
    });
    return filteredTemperaments;
};

module.exports = {
    getApiDogs,
    getApiTemperaments
};
