import { useState, useEffect } from "react";
import IVehicle from "../interface/vehicles.interface";
import axios from "axios";
const urlVehicle = "http://localhost:5000/v1/vehicles";

export const useVehicle = (
  props: IVehicle,
  page = 1
): [IVehicle[], Number, Number] => {
  const [vehicle, setvehicle] = useState<IVehicle[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalVehicle, settotalVehicle] = useState(0);
  useEffect(() => {
    axios
      .get<IVehicle>(`${urlVehicle}?page=${page}`)
      .then((response: any) => {
        setvehicle(response.data.vehicles);
        setMaxpage(response.data.info.maxpage);
        settotalVehicle(response.data.info.totalVehicle);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [vehicle, maxpage, totalVehicle];
};
