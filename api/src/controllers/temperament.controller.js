const { Temperament } = require('../database/db');
const { getApiTemperaments } = require('../connection/getApi.connection');


const getTemperaments = async (req, res) => {
    try {
        let temperamentsApi = await getApiTemperaments();
        temperamentsApi.forEach((temp) => {
            Temperament.create({ name: temp });
        });
        let temperamentsBd = await Temperament.findAll();
        if (temperamentsBd.length > 0) temperamentsApi.push(temperamentsBd.name);
        res.status(200).json(temperamentsApi);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = { getTemperaments };