import { WeaponEnum } from "./enum/weapon.enum";

interface IWeapons {
  _id?: string;
  image?: string;
  name?: string;
  type?: WeaponEnum;
  description?: string;
  owner?: string;
}

export default IWeapons;
