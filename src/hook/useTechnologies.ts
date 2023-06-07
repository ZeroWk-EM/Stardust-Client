import { useState, useEffect } from "react";
import ITechnologies from "../interface/technologies.interface";
import axios from "axios";
const urlTechnologies = "http://localhost:5000/v1/technologies";

export const useTechnologies = (
  props: ITechnologies,
  page = 1
): [ITechnologies[], Number, Number] => {
  const [technologies, settechnologies] = useState<ITechnologies[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalTechnologies, settotalTechnologies] = useState(0);
  useEffect(() => {
    axios
      .get<ITechnologies>(`${urlTechnologies}?page=${page}`)
      .then((response: any) => {
        settechnologies(response.data.technologies);
        setMaxpage(response.data.info.maxpage);
        settotalTechnologies(response.data.info.totalTechnologie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [technologies, maxpage, totalTechnologies];
};
