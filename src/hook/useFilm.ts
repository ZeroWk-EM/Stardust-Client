import { useState, useEffect } from "react";
import IMovie from "../interface/film.interface";
import axios from "axios";
const urlCharacter = "http://localhost:5000/v1/movies";

export const useFilm = (props: IMovie): [IMovie[]] => {
  const [film, setFilm] = useState<IMovie[]>([]);
  useEffect(() => {
    axios
      .get<IMovie>(`${urlCharacter}`)
      .then((response: any) => {
        setFilm(response.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return [film];
};
