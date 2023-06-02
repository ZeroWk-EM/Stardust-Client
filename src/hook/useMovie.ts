import { useState, useEffect } from "react";
import IMovie from "../interface/movie.interface";
import axios from "axios";
const urlMovie = "http://localhost:5000/v1/movies";

export const useMovie = (
  props: IMovie,
  page = 1
): [IMovie[], Number, Number] => {
  const [movie, setmovie] = useState<IMovie[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalMovie, settotalMovie] = useState(0);
  useEffect(() => {
    axios
      .get<IMovie>(`${urlMovie}?page=${page}`)
      .then((response: any) => {
        setmovie(response.data.movies);
        setMaxpage(response.data.info.maxpage);
        settotalMovie(response.data.info.totalMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [movie, maxpage, totalMovie];
};
