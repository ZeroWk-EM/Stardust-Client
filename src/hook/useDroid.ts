import { useState, useEffect } from "react";
import IDroid from "../interface/droids.interface";
import axios from "axios";
const urlDroid = "http://localhost:5000/v1/droids";

export const useDroid = (props: IDroid, page = 1): [IDroid[],Number,Number] => {
  const [droid, setdroid] = useState<IDroid[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalDroid, settotalDroid] = useState(0)
  useEffect(() => {
    axios
      .get<IDroid>(`${urlDroid}?page=${page}`)
      .then((response: any) => {
        setdroid(response.data.droids);
        setMaxpage(response.data.info.maxpage);
        settotalDroid(response.data.info.totalDroid);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [droid,maxpage,totalDroid];
};
