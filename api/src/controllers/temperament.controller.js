const { Temperament } = require('../db');


const getTemperaments = async (req, res) => {
    try {
        const temperaments = await Temperament.findAll();
        res.status(200).json(temperaments);
    } catch (error) {
        res.status(404).json({ error: error.message('Not found') });
    };
};

const getTemperament = async (req, res) => {
    const { id } = req.params;
    const temperament = await Temperament.findByPk(id);
    try {
        if (!temperament) throw new Error('Not found');
        res.status(200).json(temperament);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

const createTemperament = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name || typeof name !== 'string') throw new Error('Bad request.');
        const newTemperament = await Temperament.create({
            name
        });
        res.status(201).json(newTemperament);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    getTemperaments,
    getTemperament,
    createTemperament
};