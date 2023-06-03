import "./crud.css";
import { useMovie } from "../../hook/useMovie";
import { useFaction } from "../../hook/useFaction";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { useRef, useState } from "react";
import IMovie from "../../interface/movie.interface";
import IFaction from "../../interface/faction.interface";
import { useSerie } from "../../hook/UseSeries";
import ISerie from "../../interface/series.interface";
import { useVehicle } from "../../hook/useVehicle";
import { useWeapon } from "../../hook/useWeapon";
import IVehicles from "../../interface/vehicles.interface";
import IWeapons from "../../interface/weapons.interface";
import axios from "axios";
import { create } from "domain";
import { useNavigate } from "react-router-dom";
import ICharacter from "../../interface/characters.interface";

const CharacterCRUD = (props: { action: string }) => {
  const [film] = useMovie({});
  const [faction] = useFaction({});
  const [serie] = useSerie({});
  const [vehicle] = useVehicle({});
  const [weapon] = useWeapon({});

  const navigate = useNavigate();

  const [selectedMovie, setSelectedMovie] = useState<IMovie[] | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<IFaction[] | null>(
    null
  );
  const [selectedSerie, setSelectedSerie] = useState<ISerie[] | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<IVehicles[] | null>(
    null
  );
  const [selectedWeapon, setSelectedWeapon] = useState<IWeapons[] | null>(null);

  const [image, setImage] = useState<String>("");
  const [name, setName] = useState<String>("");
  const [surname, setSurname] = useState<String>("");
  const [height, setHeight] = useState<Number>(0);
  const [weight, setWeight] = useState<Number>(0);
  const [gender, setGender] = useState<String>("");
  const [hairColor, setHairColor] = useState<String>("");
  const [skinColor, setSkinColor] = useState<String>("");
  const [eyeColor, setEyeColor] = useState<String>("");
  const [birthYear, setBirthYear] = useState<String>("");
  const [epoch, setEpoch] = useState<String>("");
  const [homeworld, setHomeworld] = useState<String>("");
  const [specie, setSpecie] = useState<String>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const character = {
      image,
      name,
      surname,
      height,
      weight,
      gender,
      hair_color: hairColor,
      skin_color: skinColor,
      eye_color: eyeColor,
      birth_year: `${birthYear}${epoch}`,
      homeworld,
      factions: selectedFaction?.map((item) => item.name),
      movies: selectedMovie?.map((item) => item.title),
      series: selectedSerie?.map((item) => item.title),
      specie,
      vehicles: selectedVehicle?.map((item) => item.name),
      weapons: selectedWeapon?.map((item) => item.name),
    };
    try {
      axios
        .post("http://localhost:5000/v1/characters/", character)
        .then(() => {
          window.alert("Utente creato con successo");
          navigate("/characters");
        })
        .catch((e) => {
          window.alert(
            "Errore nella creazione dell'utente, eseguire un controllo sui campi"
          );
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="card py-5">
          <div className="tile">
            <h1 className="fs-3 mb-5 text-center">{props.action} Character</h1>
          </div>
          <form className="was-validated" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 ">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="image"
                    name="image"
                    placeholder="Insert image URL"
                    value={String(image)}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                  <label htmlFor="image">Image</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={String(name)}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="surname"
                    name="surname"
                    placeholder="Enter surname"
                    value={String(surname)}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                  <label htmlFor="surname">Surname</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="height"
                    name="height"
                    min={1}
                    placeholder="Enter height"
                    value={Number(height)}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    required
                  />
                  <label htmlFor="height">Height</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="weight"
                    name="weight"
                    min={1}
                    placeholder="Enter weight"
                    value={Number(weight)}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    required
                  />
                  <label htmlFor="weight">Weight</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="hair_color"
                    name="hair_color"
                    placeholder="Enter hair color"
                    value={String(hairColor)}
                    onChange={(e) => setHairColor(e.target.value)}
                    required
                  />
                  <label htmlFor="hair_color">Hair Color</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="skin_color"
                    name="skin_color"
                    placeholder="Enter skin color"
                    value={String(skinColor)}
                    onChange={(e) => setSkinColor(e.target.value)}
                    required
                  />
                  <label htmlFor="skin_color">Skin Color</label>
                </div>
              </div>
              <div className="col-12">
                <select
                  className="form-select form-select-lg mb-3"
                  value={String(gender)}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Asexual">Asexual</option>
                  <option value="Unknown">Unknown</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="col-4">
                  <select
                    className="form-select eye form-select-lg mb-3"
                    value={String(eyeColor)}
                    onChange={(e) => setEyeColor(e.target.value)}
                    required
                  >
                    <option value="">Select eye color</option>
                    <option value="Brown">Brown</option>
                    <option value="Amber">Amber</option>
                    <option value="Hazel">Hazel</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Gray">Gray</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                    <option value="Unknown">Unknown</option>
                  </select>
              </div>
              <div className="col-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="specie"
                    name="specie"
                    placeholder="Enter specie"
                    value={String(specie)}
                    onChange={(e) => setSpecie(e.target.value)}
                    required
                  />
                  <label htmlFor="specie">Specie</label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="homeworld"
                    name="homeworld"
                    placeholder="Enter homeworld"
                    value={String(homeworld)}
                    onChange={(e) => setHomeworld(e.target.value)}
                    required
                  />
                  <label htmlFor="homeworld">Homeworld</label>
                </div>
              </div>
              <div className="col-9">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="birth_year"
                    min={0}
                    name="birth_year"
                    placeholder="Enter birth year"
                    value={Number(birthYear)}
                    onChange={(e) => setBirthYear(e.target.value)}
                    required
                  />
                  <label htmlFor="birth_year">Birth Year</label>
                </div>
              </div>
              <div className="col-3">
                <select
                  className="form-select form-select-lg mb-3"
                  style={{ minHeight: "57px" }}
                  value={String(epoch)}
                  onChange={(e) => setEpoch(e.target.value)}
                  required
                >
                  <option value="">Select Epoch</option>
                  <option value="ABY">ABY</option>
                  <option value="BBY">BBY</option>
                </select>
              </div>

              <div className="col-6">
                <MultiSelect
                  value={selectedFaction}
                  onChange={(e) => setSelectedFaction(e.value)}
                  options={faction}
                  optionLabel="name"
                  filter
                  placeholder="Select Factions"
                  display="chip"
                  className="form-floating mb-3 multiselect-style"
                />
              </div>
              <div className="col-6">
                <MultiSelect
                  value={selectedMovie}
                  onChange={(e) => setSelectedMovie(e.value)}
                  options={film}
                  optionLabel="title"
                  filter
                  placeholder="Select Movies"
                  display="chip"
                  className="form-floating mb-3 multiselect-style"
                />
              </div>
              <div className="col-6">
                <MultiSelect
                  value={selectedSerie}
                  onChange={(e) => setSelectedSerie(e.value)}
                  options={serie}
                  optionLabel="title"
                  filter
                  placeholder="Select Series"
                  display="chip"
                  className="form-floating mb-3 multiselect-style"
                />
              </div>

              <div className="col-6">
                <MultiSelect
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.value)}
                  options={vehicle}
                  optionLabel="name"
                  filter
                  placeholder="Select Vehicles"
                  display="chip"
                  className="form-floating mb-3 multiselect-style"
                />
              </div>
              <div className="col-12">
                <MultiSelect
                  value={selectedWeapon}
                  onChange={(e) => setSelectedWeapon(e.value)}
                  options={weapon}
                  optionLabel="name"
                  filter
                  placeholder="Select Weapons"
                  display="chip"
                  className="form-floating mb-3 multiselect-style"
                />
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="submit">
                Crea {name} {surname}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CharacterCRUD;
