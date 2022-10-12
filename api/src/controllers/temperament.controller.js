const { Temperament, Dog } = require('../database/db');


const getTemperaments = async (req, res) => {
    try {
        const temperaments = await Temperament.findAll({ include: Dog });
        res.status(200).json(temperaments);
    } catch (error) {
        res.status(404).json({ error: error.message('Not found') });
    };
};

const getTemperament = async (req, res) => {
    const { id } = req.params;
    const temperament = await Temperament.findByPk(id, { include: Dog });
    try {
        if (!temperament) throw new Error('Not found');
        res.status(200).json(temperament);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};



module.exports = {
    getTemperaments,
    getTemperament
};