const { Dog, Temperament } = require('../database/db');
const service = require('../services');

module.exports = async (req, res) => {
  const { name } = req.query;
  try {
    let dogsDb = await Dog.findAll({ include: Temperament });
    dogsDb = dogsDb.map((e) => ({
      id: e.dataValues.id,
      name: e.dataValues.name,
      height: e.dataValues.height,
      weight: e.dataValues.weight,
      lifeSpan: e.dataValues.lifeSpan,
      image: e.dataValues.image,
      temperament: e.dataValues.temperaments.map((el) => el.name).join(', '),
    }));
    let dogsApi = await service.getApiDogs();
    dogsApi = dogsApi.map((e) => ({
      id: e.id,
      name: e.name,
      height: e.height.metric,
      weight: e.weight.metric,
      lifeSpan: e.life_span,
      image: e.image.url,
      temperament: e.temperament,
    }));
    let allDogs = dogsDb.concat(dogsApi);
    if (name) {
      console.log(name);
      allDogs = allDogs.filter((e) =>
        e.name.trim().toLowerCase().includes(name.trim().toLowerCase())
      );
    }
    if (allDogs.length === 0) throw new Error('Not found.');
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
