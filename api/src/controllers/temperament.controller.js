const { Temperament } = require('../database/db');
const { getApiTemperaments } = require('../connection/getApi.connection');


const getTemperaments = async (req, res) => {
    const allTemperament = [];
    try {
        let temperamentsApi = await getApiTemperaments();
        temperamentsApi.forEach((el) => {
            Temperament.create({ name: el });
        });
        let temperamentsBd = await Temperament.findAll({
            attributes: ['name']
        });
        if (temperamentsBd.length > 0) {
            temperamentsBd.forEach(el => allTemperament.push(el.name));
            return res.status(200).json(allTemperament);
        };
        res.status(200).json(temperamentsApi);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = { getTemperaments };