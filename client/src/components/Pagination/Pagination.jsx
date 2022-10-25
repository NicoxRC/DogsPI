import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actualDogsPag } from "../../slices/paginationSlice";

export default function Pagination() {
  const allDogs = useSelector((state) => state.dogs.allDogs);
  const dogsPerPage = useSelector((state) => state.pagination.dogsPerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();
  const index = [];

  const handleSetPage = (num) => {
    let actualPage = currentPage + num;
    const currentPages = allDogs?.slice(
      actualPage * dogsPerPage - dogsPerPage,
      actualPage * dogsPerPage
    );
    dispatch(actualDogsPag(currentPages));
  };

  for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
    index.push(i);
  }

  return (
    <div>
      <ul>
        {index.map((el) => (
          <li key={el} onClick={() => handleSetPage(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
