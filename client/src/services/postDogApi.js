import axios from 'axios';

const postDogApi = async (newDog) => {
  let Dog = {};
  if (!newDog.image)
    newDog.image =
      'https://www.criptonoticias.com/wp-content/uploads/2021/05/dogecoin-perro.jpg';
  console.log(newDog.image);

  Dog = {
    name: newDog.name,
    height: `${newDog.height_min} - ${newDog.height_max}`,
    weight: `${newDog.weight_min} - ${newDog.weight_max}`,
    lifeSpan: `${newDog.lifespan_min} - ${newDog.lifespan_max} years`,
    image: newDog.image,
    temperament: newDog.temperament.toString(),
  };

  try {
    await axios.post('/dogs', Dog);
    return alert('Dog breed created succesfully!');
  } catch (err) {
    return alert('Error trying to create dog breed:' + err.message);
  }
};

export default postDogApi;
