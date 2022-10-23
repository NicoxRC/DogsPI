import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationAction, actualDogsPag } from "../../slices/paginationSlice";
import { fetchDogs } from "../../slices/dogsSlice";

export default function Pagination() {
  const dogs = useSelector((state) => state.dogs.allDogs);
  const dogsPerPage = useSelector((state) => state.pagination.dogsPerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const [pagesState, setpagesState] = useState(currentPage);
  const dispatch = useDispatch();

  const lastIndex = pagesState * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;
  const currentPages = dogs?.slice(firstIndex, lastIndex);

  const handleSetPage = (num) => {
    setpagesState(num);
    dispatch(paginationAction(pagesState));
    dispatch(actualDogsPag(currentPages));
  };

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  const numeros = [];
  for (let i = 1; i <= Math.ceil(dogs.length / dogsPerPage); i++) {
    numeros.push(i);
  }

  return (
    <div>
      <button onClick={() => console.log(currentPages)}>asdf</button>
      <ul>
        {numeros.map((el) => (
          <li key={el} onClick={() => handleSetPage(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
