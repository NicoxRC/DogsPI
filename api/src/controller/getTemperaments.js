const { Temperament } = require('../database/db');
const services = require('../services');

module.exports = async (req, res) => {
  try {
    let temperamentsDb = await Temperament.findAll({
      attributes: ['name'],
    });

    if (temperamentsDb.length === 0) {
      let temperamentsDb = await services.getApiTemperaments();
      temperamentsDb.forEach((el) => {
        Temperament.create({ name: el });
      });
    } else {
      temperamentsDb = temperamentsDb.map((el) => el.name);
    }
    res.status(200).json(temperamentsDb);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
