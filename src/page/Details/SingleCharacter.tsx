import "./css/Singlecard.css"

import axios from "axios";
import { useEffect, useState } from "react";
import ICharacter from "../../interface/characters.interface";
import { useParams } from "react-router-dom";
const urlCharacter = "http://localhost:5000/v1/characters";

const SingleCharacter = (props: ICharacter) => {
  const { id } = useParams();
  const [character, setCharacter] = useState<ICharacter>({});

  useEffect(() => {
    axios
      .get<ICharacter>(`${urlCharacter}/${String(id)}`)
      .then((response: any) => {
        setCharacter(response.data);
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
              background: `url(${character.image})`,
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
            <h3 className="text-center mt-4">{`${character.name} ${character.surname}`}</h3>
            <div className="card-body d-flex">
              <div className="col-4 d-flex flex-column gap-3 text-center">
                <p>
                  <b>Height:</b> {character.height}
                </p>
                <p>
                  <b>Weight:</b> {character.weight}
                </p>
                <p>
                  <b>Gender:</b> {character.gender}
                </p>
              </div>

              <div className="col-4 d-flex flex-column gap-3 text-center">
                <p>
                  <b>Hair Color:</b>{" "}
                  {character.hair_color ? character.hair_color : "N/A"}
                </p>
                <p>
                  <b>Skin Color:</b> {character.skin_color}
                </p>
                <p>
                  <b>Eye Color:</b> {character.eye_color}
                </p>
              </div>

              <div className="col-4 d-flex flex-column gap-3 text-center">
                <p>
                  <b>Birth Year:</b> {character.birth_year}
                </p>
                <p>
                  <b>Homeworld:</b> {character.homeworld}
                </p>
                <p>
                  <b>Specie:</b> {character.specie}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
