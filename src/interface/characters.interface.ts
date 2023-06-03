
interface ICharacter {
  _id?:string;
  image?: string;
  name?: string;
  surname?: string;
  height?: number;
  weight?: number;
  gender?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  homeworld?: string;
  factions?: string[];
  movies?: string[];
  series?: string[];
  specie?: string;
  vehicles?: string[];
  weapons?: string[];
}

export default ICharacter;
