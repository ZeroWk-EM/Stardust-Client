import { DroidEnum } from "./enum/droid.enum";

interface IDroid {
  _id?:string;
  image?: string;
  name?: string;
  type?: DroidEnum;
  height?: number;
  weight?: number;
  owner?: string;
  factions?: string[];
  weapons?: string[];
}

export default IDroid;
