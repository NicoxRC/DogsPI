import axios from 'axios';

const getDogsApi = async () => {
    try {
        const res = await axios.get('http://localhost:3001/dogs');
        return res.data;
    } catch (err) {
        return console.log(err);
    };
};

export default getDogsApi; 