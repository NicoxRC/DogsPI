const { Dog, Temperament } = require('../database/db');
const { getApiDogs } = require('../connection/getApi.connection');


const getDogs = async (req, res) => {
    const { name } = req.query;
    try {
        let dogsDb = await Dog.findAll({ include: Temperament });
        dogsDb = dogsDb.map(e => ({
            id: e.dataValues.id,
            name: e.dataValues.name,
            height: e.dataValues.height,
            weight: e.dataValues.weight,
            lifeSpan: e.dataValues.lifeSpan,
            image: e.dataValues.image,
            temperament: e.dataValues.temperaments.map(el => el.name).join(', ')
        }));
        let dogsApi = await getApiDogs();
        dogsApi = dogsApi.map(e => ({
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            lifeSpan: e.life_span,
            image: e.image.url
        }));
        let allDogs = dogsDb.concat(dogsApi);
        if (name) {
            allDogs = allDogs.filter(e => e.name.toLowerCase() === (name.trim().toLowerCase()));
        };
        if (allDogs.length === 0) throw new Error('Not found.')
        res.status(200).json(allDogs)
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

const getDog = async (req, res) => {
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
                lifespan: findedDog.dataValues.lifespan,
                image: findedDog.dataValues.image,
                temperament: findedDog.dataValues.temperaments.map((temp) => temp.name).join(', ')
            };
        } else {
            findedDog = await getApiDogs();
            findedDog = findedDog.find(e => e.id === Number(id));
            if (!findedDog) throw new Error('Not found.')
            findedDog = {
                id: findedDog.id,
                name: findedDog.name,
                height: findedDog.height.metric,
                weight: findedDog.weight.metric,
                lifespan: findedDog.life_span,
                image: findedDog.image.url,
                temperament: findedDog.temperament
            };
        };
        res.status(200).json(findedDog);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

const createDog = async (req, res) => {
    const { name, height, weight, lifeSpan, temperament } = req.body;
    try {
        if (!name || typeof name !== 'string' || !height || !weight) throw new Error('Bad request.');
        const newDog = await Dog.create({
            name,
            height,
            weight,
            lifeSpan
        });
        if (temperament) {
            const temperamentDog = await Temperament.findOrCreate({
                where: { name: temperament }
            });
            await newDog.addTemperament(temperamentDog[0]);
        };
        res.status(201).json(newDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    getDogs,
    getDog,
    createDog
};