import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogDetails } from "../../../slices/dogsSlice";
import Spinner from "../../Spinner/Spinner";
import "./DogDetails.css";

export default function DogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetails = useSelector((state) => state.dogs.dogDetails);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDogDetails(id));
  }, [id, dispatch]);

  const handleClickBack = () => {
    history.push("/home");
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="dog_details">
      <button onClick={handleClickBack}>back</button>
      <div className="dog_details_container">
        <div className="dog_details_img">
          <img src={dogDetails.image} alt={dogDetails.image} />
        </div>
        <div className="dog_details_list">
          <h1>{dogDetails.name}</h1>
          <ul>
            <li>
              <p>
                <strong>Temperament: </strong>
                {dogDetails?.temperament
                  ? dogDetails?.temperament
                  : "Not specified"}
              </p>
            </li>
            <li>
              <p>
                <strong>Height: </strong>
                {dogDetails?.height} Cm
              </p>
            </li>
            <li>
              <p>
                <strong>Weight: </strong>
                {dogDetails?.weight} Kg
              </p>
            </li>
            <li>
              <p>
                <strong>Lifespan: </strong>
                {parseInt(dogDetails?.lifespan) > 0
                  ? dogDetails?.lifespan
                  : "Not specified"}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
