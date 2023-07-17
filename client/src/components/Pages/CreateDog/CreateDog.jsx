import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postDog } from '../../../slices/dogsSlice';
import { fetchTemperaments } from '../../../slices/temperamentsSlice';
import './CreateDog.css';

export default function CreateDog() {
  const history = useHistory();
  const dispatch = useDispatch();
  const temperaments = useSelector(
    (state) => state.temperaments.allTemperaments
  );
  const [bottonActive, setBottonActive] = useState(true);
  const [error, setError] = useState({});
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [newDog, setNewDog] = useState({
    name: '',
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    lifespan_min: 0,
    lifespan_max: 0,
    image: '',
  });

  const formValidation = (input) => {
    const regexName = /[0-9.,#!$%&;:{}=\-_`~()”“"…]/g;
    const regexImage = '[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$';
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
      typeof input.name === 'string' &&
      !input.name.match(regexName) &&
      input.name.length > 0 &&
      input.name.length < 30
    ) {
      errors = { ...errors, name: false };
    } else {
      errors = { ...errors, name: true };
      validate = false;
    }

    if (input.height_min && input.height_max) {
      if (input.height_min >= 15 && input.height_max <= 110) {
        if (Number(input.height_min) < Number(input.height_max)) {
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

    if (input.weight_min && input.weight_max) {
      if (input.weight_min >= 1.4 && input.weight_max <= 110) {
        if (Number(input.weight_min) < Number(input.weight_max)) {
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

    if (input.lifespan_min || input.lifespan_max) {
      if (input.lifespan_min && input.lifespan_max) {
        if (input.lifespan_min >= 8 && input.lifespan_max <= 20) {
          if (Number(input.lifespan_min) < Number(input.lifespan_max)) {
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
        if (input.lifespan_min) {
          if (input.lifespan_min >= 8 && input.lifespan_min <= 20) {
            errors = { ...errors, lifespan_min: false };
          } else {
            errors = { ...errors, lifespan_min: true };
            validate = false;
          }
        } else {
          if (input.lifespan_max >= 8 && input.lifespan_max <= 20) {
            errors = { ...errors, lifespan_max: false };
          } else {
            errors = { ...errors, lifespan_max: true };
            validate = false;
          }
        }
      }
    }

    if (input.image.length > 0) {
      if (typeof input.image === 'string' && input.image.match(regexImage)) {
        errors = { ...errors, image: false };
      } else {
        errors = { ...errors, image: true };
        validate = false;
      }
    }

    if (validate) {
      setBottonActive(false);
    } else {
      setBottonActive(true);
    }
    return errors;
  };

  const handleChange = (e) => {
    setNewDog((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      const err = formValidation(newState);
      setError(err);
      return newState;
    });
  };

  const handleSelect = (e) => {
    if (
      selectedTemperaments.length < 6 &&
      !selectedTemperaments.includes(e.target.value)
    ) {
      setBottonActive(false);
      setError({ ...error, temperament: false });
      setSelectedTemperaments([...selectedTemperaments, e.target.value]);
    } else {
      setBottonActive(true);
      setError({ ...error, temperament: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDog({ ...newDog, temperament: selectedTemperaments }));
    history.push('/home');
  };

  const handleDelete = (temp) => {
    setSelectedTemperaments(selectedTemperaments.filter((t) => t !== temp));
  };

  const handleClickBack = () => {
    history.push('/home');
  };

  useEffect(() => {
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return (
    <div className="create_dog">
      <button className="button_back" onClick={handleClickBack}>
        back
      </button>
      <div className="dog_form_container">
        <form className="dog_form" onSubmit={handleSubmit}>
          <h1>Create Dog</h1>
          <div className="mini_containers">
            <label htmlFor="name">Name : </label>
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
          <div className="mini_containers">
            <label htmlFor="height_min">Min height: </label>
            <input
              type="text"
              name="height_min"
              placeholder="Min height..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.height_min ? false : true}>
              The minimum height must be greater than 15 cm and less than the
              maximum height
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="height_max">Max height: </label>
            <input
              type="text"
              name="height_max"
              placeholder="Max height..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.height_max ? false : true}>
              The maximum height must be less than 110 cm and greater than the
              minimum height
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="weight_min">Min weight: </label>
            <input
              type="text"
              name="weight_min"
              placeholder="Min weight..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.weight_min ? false : true}>
              The minimum weight must be greater than 1.4 kg and less than the
              maximum weight
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="weight_max">Max weight: </label>
            <input
              type="text"
              name="weight_max"
              placeholder="Max weight..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.weight_max ? false : true}>
              The maximum weight must be less than 110 kg and greater than the
              minimum height
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="lifespan_min">Min lifespan: </label>
            <input
              type="text"
              name="lifespan_min"
              placeholder="Min lifespan..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.lifespan_min ? false : true}>
              The minimum lifespan must be greater than 8 years and less than
              the maximum lifespan
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="lifespan_max">Max lifespan: </label>
            <input
              type="text"
              name="lifespan_max"
              placeholder="Max lifespan..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.lifespan_max ? false : true}>
              The maximum lifespan must be less than 20 years and greater than
              the minimum lifespan
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              name="image"
              placeholder="Image..."
              onChange={handleChange}
            />
            <p className="error" hidden={error.image ? false : true}>
              The image must be a valid link or be empty
            </p>
          </div>
          <div className="mini_containers">
            <label htmlFor="temperaments">Temperaments: </label>
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
          <div className="temperaments_container">
            {selectedTemperaments?.map((temp) => (
              <p value={temp} key={temp}>
                {temp}{' '}
                <button type="button" onClick={() => handleDelete(temp)}>
                  ✖
                </button>
              </p>
            ))}
          </div>
          <button className="submit_button" disabled={bottonActive}>
            CreateDog
          </button>
        </form>
      </div>
    </div>
  );
}
