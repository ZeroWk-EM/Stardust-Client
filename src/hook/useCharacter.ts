import { useState, useEffect } from "react";
import ICharacter from "../interface/characters.interface";
import axios from "axios";
const urlCharacter = "http://localhost:5000/v1/characters";

export const useCharacter = (props: ICharacter): [ICharacter[]] => {
  const [character, setcharacter] = useState<ICharacter[]>([]);
  useEffect(() => {
    axios
      .get<ICharacter>(`${urlCharacter}`)
      .then((response: any) => {
        setcharacter(response.data.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return [character];
};
