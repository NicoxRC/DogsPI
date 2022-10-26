import axios from "axios";

const getDogDetailsApi = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/dogs/${id}`);
        return res.data;
    } catch (err) {
        return console.log(err);
    };
}

export default getDogDetailsApi;