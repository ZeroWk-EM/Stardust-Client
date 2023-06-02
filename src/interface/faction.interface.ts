interface IFaction {
  _id?: string;
  image?: string;
  name?: string;
  description?: string;
  planet?: string[];
  weapons?: string[];
  technology?: string[];
}

export default IFaction;
