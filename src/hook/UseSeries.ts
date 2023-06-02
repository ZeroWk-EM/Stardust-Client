import { useState, useEffect } from "react";
import ISerie from "../interface/series.interface";
import axios from "axios";
const urlSerie = "http://localhost:5000/v1/series";

export const useSerie = (props: ISerie, page = 1): [ISerie[],Number,Number] => {
  const [serie, setserie] = useState<ISerie[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalSerie, settotalSerie] = useState(0)
  useEffect(() => {
    axios
      .get<ISerie>(`${urlSerie}?page=${page}`)
      .then((response: any) => {
        setserie(response.data.series);
        setMaxpage(response.data.info.maxpage);
        settotalSerie(response.data.info.totalSerie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [serie,maxpage,totalSerie];
};
