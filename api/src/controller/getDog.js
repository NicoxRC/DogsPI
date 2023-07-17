const { Dog, Temperament } = require('../database/db');
const service = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
  let findedDog = {};
  try {
    if (regex.test(id)) {
      findedDog = await Dog.findByPk(id, { include: Temperament });
      if (!findedDog) throw new Error('Not found.');
      findedDog = {
        id: findedDog.dataValues.id,
        name: findedDog.dataValues.name,
        height: findedDog.dataValues.height,
        weight: findedDog.dataValues.weight,
        lifespan: findedDog.dataValues.lifeSpan,
        image: findedDog.dataValues.image,
        temperament: findedDog.dataValues.temperaments
          .map((temp) => temp.name)
          .join(', '),
      };
    } else {
      findedDog = await service.getApiDogs();
      findedDog = findedDog.find((e) => e.id === Number(id));
      if (!findedDog) throw new Error('Not found.');
      findedDog = {
        id: findedDog.id,
        name: findedDog.name,
        height: findedDog.height.metric,
        weight: findedDog.weight.metric,
        lifespan: findedDog.life_span,
        image: findedDog.image.url,
        temperament: findedDog.temperament,
      };
    }
    res.status(200).json(findedDog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
