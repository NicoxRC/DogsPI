const { Dog } = require('../db')


const getDogs = async (req, res) => {
    try {
        const dogs = await Dog.findAll();
        res.status(200).json(dogs);
    } catch (error) {
        res.status(404).json({ error: error.message('Not found') });
    };
};

const getDog = async (req, res) => {
    const { id } = req.params;
    const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
    try {
        if (!regex.test(id)) return res.status(400).json({ error: "Bad request." });
        const dog = await Dog.findByPk(id);
        if (!dog) throw new Error('Not found.');
        res.status(200).json(dog);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

const createDog = async (req, res) => {
    const { name, id, height, weight, yearsOfLife } = req.body;
    try {
        if (!name || typeof name !== 'string' || !height || !weight) throw new Error('Bad request.');
        const newDog = await Dog.create({
            name,
            id,
            height,
            weight,
            yearsOfLife
        });
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