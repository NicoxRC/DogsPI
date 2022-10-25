import axios from 'axios';

const postDogApi = async (dog) => {
    let newDog = {}
    if (!dog.image) dog.image = 'https://www.criptonoticias.com/wp-content/uploads/2021/05/dogecoin-perro.jpg';
    if (!dog.temperament) {
        newDog = {
            name: dog.name,
            height: `${dog.height_min}-${dog.height_max}`,
            weight: `${dog.weight_min}-${dog.weight_max}`,
            lifeSpan: `${dog.lifespan_min}-${dog.lifespan_max} years`,
            image: dog.image,
            temperament: dog.temperament
        };
    } else {
        newDog = {
            name: dog.name,
            height: `${dog.height_min}-${dog.height_max}`,
            weight: `${dog.weight_min}-${dog.weight_max}`,
            lifeSpan: `${dog.lifespan_min}-${dog.lifespan_max} years`,
            image: dog.image
        };
    }

    await axios
        .post('http://localhost:3001/dogs', newDog)
        .then(() => {
            alert('Dog breed created succesfully!')
        })
        .catch((err) => {
            alert('Error trying to create dog breed:' + err.message);
        });
};

export default postDogApi;