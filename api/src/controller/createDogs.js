const { Dog, Temperament } = require('../database/db');

module.exports = async (req, res) => {
  const { name, height, weight, lifeSpan, temperament, image } = req.body;
  try {
    if (!name || typeof name !== 'string' || !height || !weight)
      throw new Error('Bad request.');
    const newDog = await Dog.create({
      name,
      height,
      weight,
      lifeSpan,
      image,
    });
    if (temperament) {
      const temperamentDog = await Temperament.findOrCreate({
        where: { name: temperament },
      });
      await newDog.addTemperament(temperamentDog[0]);
    }
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
