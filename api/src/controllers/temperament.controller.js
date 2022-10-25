const { Temperament } = require('../database/db');
const { getApiTemperaments } = require('../connection/getApi.connection');


const getTemperaments = async (req, res) => {
    try {
        let temperamentsDb = await Temperament.findAll({
            attributes: ['name']
        });

        if (temperamentsDb.length === 0) {
            let temperamentsDb = await getApiTemperaments();
            temperamentsDb.forEach((el) => {
                Temperament.create({ name: el });
            });
        } else {
            temperamentsDb = temperamentsDb.map((el => el.name));
        }
        res.status(200).json(temperamentsDb);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = { getTemperaments };