import "./css/Singlecard.css";

import axios from "axios";
import { useEffect, useState } from "react";
import IDroid from "../../interface/droids.interface";
import { useParams } from "react-router-dom";
const urlDroid = "http://localhost:5000/v1/droids";

const SingleDroid = (props: IDroid) => {
  const { id } = useParams();
  const [droid, setDroid] = useState<IDroid>({});

  useEffect(() => {
    axios
      .get<IDroid>(`${urlDroid}/${String(id)}`)
      .then((response: any) => {
        setDroid(response.data);
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
              background: `url(${droid.image})`,
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
            <h3 className="text-center mt-4">{`${droid.name}`}</h3>
            <div className="card-body d-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDroid;
