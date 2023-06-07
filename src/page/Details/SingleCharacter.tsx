import "./css/Singlecard.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import ICharacter from "../../interface/characters.interface";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
const urlCharacter = "http://localhost:5000/v1/characters";

const SingleCharacter = (props: ICharacter) => {
  const { id } = useParams();
  const [cookie] = useCookies(["username", "token"]);
  const [character, setCharacter] = useState<ICharacter>({});
  const navigate = useNavigate();

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

  const handleDelete = () => {
    const headers = {
      authorization: `${cookie.token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete(`${urlCharacter}/${String(id)}`, { headers })
      .then((response) => {
        window.alert(`${response.data.message}`);
        navigate("/characters");
      });
  };

  return (
    <div className="container">
      <div className="row">
        {cookie.token ? (
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              type="submit"
            >
              Delete {`${character.name} ${character.surname}`}
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="col-md-3 mt-3">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg sizig_img"
            style={{
              minHeight: "500px",
              background: `url(${character.image})`,
            }}
          ></div>
        </div>

        <div className="col-md-9 mt-3">
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

        <div className="col-12 col-md-4 mt-3">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">Faction</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: "none" }}>
                {character.factions?.length && character.factions?.length > 0
                  ? character.factions?.map((faction) => {
                      return <li className="text-center">{faction}</li>;
                    })
                  : `${character.name} ${character.surname} dont'have faction`}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">Movie</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: "none" }}>
                {character.movies?.length && character.movies?.length > 0
                  ? character.movies?.map((movie) => {
                      return <li className="text-center">{movie}</li>;
                    })
                  : `${character.name} ${character.surname} dont'have movie`}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">Series</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: "none" }}>
                {character.series?.length && character.series?.length > 0
                  ? character.series?.map((serie) => {
                      return <li className="text-center">{serie}</li>;
                    })
                  : `${character.name} ${character.surname} dont'have serie`}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-3">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">Weapon</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: "none" }}>
                {character.weapons?.length && character.weapons?.length > 0
                  ? character.weapons?.map((weapon) => {
                      return <li className="text-center">{weapon}</li>;
                    })
                  : `${character.name} ${character.surname} dont'have weapon`}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-3">
          <div
            className="card h-100 sizig_img"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://media0.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif?cid=ecf05e47aopejar01b4vktnpy7wcdx929mxhpeeyihct7le8&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
              color: "white",
            }}
          >
            <h3 className="text-center mt-4">Vehicle</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: "none" }}>
                {character.vehicles?.length && character.vehicles?.length > 0
                  ? character.vehicles?.map((vehicle) => {
                      return <li className="text-center">{vehicle}</li>;
                    })
                  : `${character.name} ${character.surname} dont'have vehicle`}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
