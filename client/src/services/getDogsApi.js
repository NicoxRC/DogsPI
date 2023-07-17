import axios from 'axios';

const getDogsApi = async () => {
  try {
    const res = await axios.get('/dogs');
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default getDogsApi;
