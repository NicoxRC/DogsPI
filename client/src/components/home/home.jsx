import React from "react";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import CreateDog from "../CreateDog/CreateDog";
import { useEffect } from "react";
import { fetchDogs } from "../../slices/dogsSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Cards />
      <CreateDog />
    </div>
  );
}
