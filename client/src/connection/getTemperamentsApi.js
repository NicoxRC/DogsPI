import axios from 'axios';

const getTemperamentsApi = async () => {
    try {
        const res = await axios.get('http://localhost:3001/temperaments')
        return res.data;
    } catch (err) {
        return console.log(err)
    };
};

export default getTemperamentsApi;