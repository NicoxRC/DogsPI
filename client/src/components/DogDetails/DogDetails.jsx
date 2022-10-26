import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogDetails } from "../../slices/dogsSlice";

export default function DogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetails = useSelector();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDogDetails(id));
  }, [id, dispatch]);

  const handleClickBack = () => {
    history.push("/home");
  };

  return (
    <div>
      <button onClick={handleClickBack}>back</button>
      <div>
        <img src={dogDetails.img} alt={dogDetails.img} />
      </div>
      <div>
        <h1>{dogDetails.name}</h1>
        <ul>
          <li>
            <h3>Temperament :</h3>
            <p>{dogDetails?.temperament}</p>
          </li>
          <li>
            <h3>Height :</h3>
            <p>{dogDetails?.height} Cm</p>
          </li>
          <li>
            <h3>Weight :</h3>
            <p>{dogDetails?.weight} Kg</p>
          </li>
          <li>
            <h3>Life span:</h3>
            <p>{dogDetails?.lifespan}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
