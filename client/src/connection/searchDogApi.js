import axios from 'axios';

const searchDogApi = async (search) => {
    try {
        const res = await axios.get(`http://localhost:3001/dogs?name=${search}`);
        return res.data;
    } catch (err) {
        return console.log(err);
    };
};

export default searchDogApi; 