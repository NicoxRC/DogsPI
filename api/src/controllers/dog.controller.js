const getDogs = (req, res) => {
    res.send('getting dogs')
}
const createDog = (req, res) => {
    res.send('creatting dogs')
}

module.exports = {
    getDogs,
    createDog
}