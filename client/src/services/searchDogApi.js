import axios from 'axios';

const searchDogApi = async (search) => {
  try {
    const res = await axios.get(`/dogs?name=${search}`);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default searchDogApi;
