import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog } from "../../slices/dogsSlice";
import { fetchTemperaments } from "../../slices/temperamentsSlice";
import "./CreateDog.css";

export default function CreateDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector(
    (state) => state.temperaments.allTemperaments
  );

  const [newDog, setNewDog] = useState({
    name: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    lifespan_min: 0,
    lifespan_max: 0,
    image: "",
  });

  const [error, setError] = useState({
    name: false,
    height_min: false,
    height_max: false,
    weight_min: false,
    weight_max: false,
    lifespan_min: false,
    lifespan_max: false,
    image: false,
  });

  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  const formValidation = () => {
    const regexName = /[0-9.,#!$%&;:{}=\-_`~()”“"…]/g;
    const regexImage = "[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$";
    let errors = {
      name: false,
      height_min: false,
      height_max: false,
      weight_min: false,
      weight_max: false,
      lifespan_min: false,
      lifespan_max: false,
      image: false,
    };
    let validate = true;

    if (
      typeof newDog.name === "string" &&
      !newDog.name.match(regexName) &&
      newDog.name.length > 0 &&
      newDog.name.length < 30
    ) {
      errors = { ...errors, name: false };
    } else {
      errors = { ...errors, name: true };
      validate = false;
    }
    if (newDog.height_min && newDog.height_max) {
      if (newDog.height_min >= 15 && newDog.height_max <= 110) {
        if (Number(newDog.height_min) < Number(newDog.height_max)) {
          errors = { ...errors, height_min: false, height_max: false };
        } else {
          errors = { ...errors, height_min: true, height_max: true };
          validate = false;
        }
      } else {
        errors = { ...errors, height_min: true, height_max: true };
        validate = false;
      }
    } else {
      errors = { ...errors, height_min: true, height_max: true };
      validate = false;
    }
    if (newDog.weight_min && newDog.weight_max) {
      if (newDog.weight_min >= 1.4 && newDog.weight_max <= 110) {
        if (Number(newDog.weight_min) < Number(newDog.weight_max)) {
          errors = { ...errors, weight_min: false, weight_max: false };
        } else {
          errors = { ...errors, weight_min: true, weight_max: true };
          validate = false;
        }
      } else {
        errors = { ...errors, weight_min: true, weight_max: true };
        validate = false;
      }
    } else {
      errors = { ...errors, weight_min: true, weight_max: true };
      validate = false;
    }
    if (newDog.lifespan_min || newDog.lifespan_max) {
      if (newDog.lifespan_min && newDog.lifespan_max) {
        if (newDog.lifespan_min >= 8 && newDog.lifespan_max <= 20) {
          if (Number(newDog.lifespan_min) < Number(newDog.lifespan_max)) {
            errors = { ...errors, lifespan_min: false, lifespan_max: false };
          } else {
            errors = { ...errors, lifespan_min: true, lifespan_max: true };
            validate = false;
          }
        } else {
          errors = { ...errors, lifespan_min: true, lifespan_max: true };
          validate = false;
        }
      } else {
        if (newDog.lifespan_min) {
          if (newDog.lifespan_min >= 8 && newDog.lifespan_min <= 20) {
            errors = { ...errors, lifespan_min: false };
          } else {
            errors = { ...errors, lifespan_min: true };
            validate = false;
          }
        } else {
          if (newDog.lifespan_max >= 8 && newDog.lifespan_max <= 20) {
            errors = { ...errors, lifespan_max: false };
          } else {
            errors = { ...errors, lifespan_max: true };
            validate = false;
          }
        }
      }
    }
    if (newDog.image.length > 0) {
      if (typeof newDog.image === "string" && newDog.image.match(regexImage)) {
        errors = { ...errors, image: false };
      } else {
        errors = { ...errors, image: true };
        validate = false;
      }
    }
    setError(errors);
    return validate;
  };

  const handleChange = (e) => {
    setNewDog({
      ...newDog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    if (
      selectedTemperaments.length < 6 &&
      !selectedTemperaments.includes(e.target.value)
    ) {
      setError({ ...error, temperament: false });
      setSelectedTemperaments([...selectedTemperaments, e.target.value]);
    } else {
      setSelectedTemperaments([...selectedTemperaments, e.target.value]);
      setError({ ...error, temperament: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      dispatch(postDog({ ...newDog, temperament: selectedTemperaments }));
    }
  };

  useEffect(() => {
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Dog</h1>
        <div>
          <h4>Name: </h4>
          <input
            type="text"
            name="name"
            placeholder="Insert name.."
            onChange={handleChange}
          />
          <p className="error" hidden={error.name ? false : true}>
            The name must have a maximum of 30 characters and must not contain
            numbers or punctuation marks
          </p>
        </div>
        <div>
          <h4>Height (cm):</h4>
          <label htmlFor="height_min">Min</label>
          <input
            type="text"
            name="height_min"
            placeholder="min height..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.height_min ? false : true}>
            The minimum height must be greater than 15 cm and less than the
            maximum height
          </p>
          <label htmlFor="height_max">Max</label>
          <input
            type="text"
            name="height_max"
            placeholder="max height..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.height_max ? false : true}>
            The maximum height must be less than 110 cm and greater than the
            minimum height
          </p>
        </div>
        <div>
          <h4>Weight (Kg):</h4>
          <label htmlFor="weight_min">Min</label>
          <input
            type="text"
            name="weight_min"
            placeholder="min weight..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.weight_min ? false : true}>
            The minimum weight must be greater than 1.4 kg and less than the
            maximum weight
          </p>
          <label htmlFor="weight_max">Max</label>
          <input
            type="text"
            name="weight_max"
            placeholder="max weight..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.weight_max ? false : true}>
            The maximum weight must be less than 110 kg and greater than the
            minimum height
          </p>
        </div>
        <div>
          <h4>Lifespan (years):</h4>
          <label htmlFor="lifespan_min">Min</label>
          <input
            type="text"
            name="lifespan_min"
            placeholder="min lifespan..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.lifespan_min ? false : true}>
            The minimum lifespan must be greater than 8 years and less than the
            maximum lifespan
          </p>
          <label htmlFor="lifespan_max">Max</label>
          <input
            type="text"
            name="lifespan_max"
            placeholder="max lifespan..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.lifespan_max ? false : true}>
            The maximum lifespan must be less than 20 years and greater than the
            minimum lifespan
          </p>
        </div>
        <div>
          <h4>Image:</h4>
          <input
            type="text"
            name="image"
            placeholder="image..."
            onChange={handleChange}
          />
          <p className="error" hidden={error.image ? false : true}>
            The image must be a valid link or be empty
          </p>
        </div>
        <div>
          <h4>Temperaments:</h4>
          <select
            name="temperaments"
            defaultValue="default"
            onChange={handleSelect}
          >
            <option value="default" hidden>
              Choose temperaments...
            </option>
            {temperaments?.map((temperament) => (
              <option value={temperament} key={temperament}>
                {temperament}
              </option>
            ))}
          </select>
          <p className="error" hidden={error.temperament ? false : true}>
            It can select a maximum of 6 temperaments and they should not be
            repeated
          </p>
        </div>
        <div>
          {selectedTemperaments?.map((temp) => (
            <p value={temp} key={temp}>
              {temp} <b>✖</b>
            </p>
          ))}
        </div>
        <button>CreateDog</button>
      </form>
    </div>
  );
}
