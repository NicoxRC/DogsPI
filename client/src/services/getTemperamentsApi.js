import axios from 'axios';

const getTemperamentsApi = async () => {
  try {
    const res = await axios.get('/temperaments');
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default getTemperamentsApi;
