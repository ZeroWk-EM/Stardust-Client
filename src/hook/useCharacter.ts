import { useState, useEffect } from "react";
import ICharacter from "../interface/characters.interface";
import axios from "axios";
const urlCharacter = "http://localhost:5000/v1/characters";

export const useCharacter = (props: ICharacter, page = 1): [ICharacter[],Number,Number] => {
  const [character, setcharacter] = useState<ICharacter[]>([]);
  const [maxpage, setMaxpage] = useState(0);
  const [totalCharacter, settotalCharacter] = useState(0)
  useEffect(() => {
    axios
      .get<ICharacter>(`${urlCharacter}?page=${page}`)
      .then((response: any) => {
        setcharacter(response.data.characters);
        setMaxpage(response.data.info.maxpage);
        settotalCharacter(response.data.info.totalCharacter);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return [character,maxpage,totalCharacter];
};
