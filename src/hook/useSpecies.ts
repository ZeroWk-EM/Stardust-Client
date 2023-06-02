import { useState, useEffect } from "react";
import ISpecie from "../interface/species.interface";
import axios from "axios";
const urlSpecie = "http://localhost:5000/v1/species";

export const useSpecie = (props: ISpecie, page = 1): [ISpecie[],Number,Number] => {
  const [specie, setspecie] = useState<ISpecie[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalSpecie, settotalSpecie] = useState(0)
  useEffect(() => {
    axios
      .get<ISpecie>(`${urlSpecie}?page=${page}`)
      .then((response: any) => {
        setspecie(response.data.species);
        setMaxpage(response.data.info.maxpage);
        settotalSpecie(response.data.info.totalSpecie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [specie,maxpage,totalSpecie];
};
