import { useState, useEffect } from "react";
import IFaction from "../interface/faction.interface";
import axios from "axios";
const urlFaction = "http://localhost:5000/v1/factions";

export const useFaction = (
  props: IFaction,
  page = 1
): [IFaction[], Number, Number] => {
  const [faction, setfaction] = useState<IFaction[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalFaction, settotalFaction] = useState(0);
  useEffect(() => {
    axios
      .get<IFaction>(`${urlFaction}?page=${page}`)
      .then((response: any) => {
        setfaction(response.data.factions);
        setMaxpage(response.data.info.maxpage);
        settotalFaction(response.data.info.totalFaction);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [faction, maxpage, totalFaction];
};
