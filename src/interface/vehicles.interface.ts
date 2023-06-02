import { VechicleEnum } from "./enum/vehicle.enum";

interface IVehicles {
  _id?: string;
  image?: string;
  name?: string;
  model?: string;
  type?: VechicleEnum;
  manufacturer?: string;
  cost_in_credits?: number;
  length?: number;
  crew?: number;
  passengers?: number;
  cargo_capacity?: number;
  vehicle_class?: number;
  max_atmosphering_speed?: number;
  hyperdrive_rating?: number;
  MGLT?: number;
}

export default IVehicles;
