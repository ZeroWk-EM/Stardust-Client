import "./css/Singlecard.css"

import axios from "axios";
import { useEffect, useState } from "react";
import IVehicles from "../../interface/vehicles.interface";
import { useParams } from "react-router-dom";
const urlVehicle = "http://localhost:5000/v1/vehicles";

const SingleVehicle = (props: IVehicles) => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<IVehicles>({});

  useEffect(() => {
    axios
      .get<IVehicles>(`${urlVehicle}/${String(id)}`)
      .then((response: any) => {
        setVehicle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mt-5">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg sizig_img"
            style={{
              minHeight: "500px",
              background: `url(${vehicle.image})`,
            }}
          ></div>
        </div>

        <div className="col-md-9 mt-5">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">{`${vehicle.name} `}</h3>
            <div className="card-body d-flex">
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVehicle;
