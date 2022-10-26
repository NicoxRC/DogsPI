import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setPagination } from "../../slices/paginationSlice";
import { setShowDogs } from "../../slices/showDogsSlice";

export default function Pagination() {
  const allDogs = useSelector((state) => state.dogs.allDogs);
  const filterDogs = useSelector((state) => state.filters.filterDogs);
  const dogsPerPage = useSelector((state) => state.pagination.pag.dogsPerPage);
  const allDogsShow = useSelector((state) => state.showDogs.allDogsShow);
  const pag = useSelector((state) => state.pagination.pag);
  const dispatch = useDispatch();
  const index = [];

  useEffect(() => {
    filterDogs?.length
      ? dispatch(setShowDogs(filterDogs))
      : dispatch(setShowDogs(allDogs));
  }, [dispatch, allDogs, filterDogs]);

  const handleSetPage = (num) => {
    dispatch(setPage(num));
  };

  useEffect(() => {
    dispatch(setPagination({ allDogsShow, pag }));
  }, [dispatch, allDogsShow, pag]);

  for (let i = 1; i <= Math.ceil(allDogsShow?.length / dogsPerPage); i++) {
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
