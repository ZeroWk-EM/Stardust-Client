import { useState, useEffect } from "react";
import IWeapon from "../interface/weapons.interface";
import axios from "axios";
const urlWeapon = "http://localhost:5000/v1/weapons";

export const useWeapon = (props: IWeapon, page = 1): [IWeapon[],Number,Number] => {
  const [weapon, setweapon] = useState<IWeapon[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalWeapon, settotalWeapon] = useState(0)
  useEffect(() => {
    axios
      .get<IWeapon>(`${urlWeapon}?page=${page}`)
      .then((response: any) => {
        setweapon(response.data.weapons);
        setMaxpage(response.data.info.maxpage);
        settotalWeapon(response.data.info.totalWeapons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [weapon,maxpage,totalWeapon];
};
