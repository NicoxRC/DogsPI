import axios from 'axios';

const searchDog = async (search) => {
    try {
        const res = await axios.get(`http://localhost:3001/dogs?name=${search}`);
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

export default searchDog; 