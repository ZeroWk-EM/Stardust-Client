import { useState, useEffect } from "react";
import ICreature from "../interface/creatures.interface";
import axios from "axios";
const urlCreature = "http://localhost:5000/v1/creatures";

export const useCreature = (props: ICreature, page = 1): [ICreature[],Number,Number] => {
  const [creature, setcreature] = useState<ICreature[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalCreature, settotalCreature] = useState(0)
  useEffect(() => {
    axios
      .get<ICreature>(`${urlCreature}?page=${page}`)
      .then((response: any) => {
        setcreature(response.data.creatures);
        setMaxpage(response.data.info.maxpage);
        settotalCreature(response.data.info.totalCreature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [creature,maxpage,totalCreature];
};
