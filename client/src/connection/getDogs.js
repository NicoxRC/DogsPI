import axios from 'axios';

const getAllDogs = () => {
    return axios
        .get('http://localhost:3001/dogs')
        .then((res) => res.data)
        .catch((err) => console.log(err));
}

export default getAllDogs;