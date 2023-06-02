import { useState, useEffect } from "react";
import axios from "axios";
import IFaction from "../interface/faction.interface";
const urlEndpoint = "http://localhost:5000/v1/factions";

export const useFaction = (
  props: IFaction
): [IFaction[]] => {
  const [factions, setFactions] = useState<IFaction[]>([]);
  useEffect(() => {
    axios
      .get<IFaction>(`${urlEndpoint}`)
      .then((response: any) => {
        setFactions(response.data.factions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return [factions];
};
