import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import Character from "./page/Character";
import Droid from "./page/Droid";
import Creature from "./page/Creature";
import Faction from "./page/Faction";
import Movie from "./page/Movie";
import Serie from "./page/Series";
import Specie from "./page/Species";
import Technologie from "./page/Technologies";
import Vehicle from "./page/Vehicles";
import Weapon from "./page/Weapons";

import SingleCharacter from "./page/Details/SingleCharacter";
import SingleCreature from "./page/Details/SingleCreature";
import SingleDroid from "./page/Details/SingleDroid";
import SingleFaction from "./page/Details/SingleFaction";
import SingleMovie from "./page/Details/SingleMovie";
import SingleSerie from "./page/Details/SingleSerie";
import SingleSpecie from "./page/Details/SingleSpecie";
import SingleTechnologie from "./page/Details/SingleTechnologie";
import SingleVehicle from "./page/Details/SingleVehicle";
import SingleWeapon from "./page/Details/SingleWeapon";

import CharacterCRUD from "./components/Crud/characterCRUD";
import CreatureCRUD from "./components/Crud/creatureCRUD";
import DroidCRUD from "./components/Crud/droidCRUD";
import FactionCRUD from "./components/Crud/factionCRUD";
import MovieCRUD from "./components/Crud/movieCRUD";
import SerieCRUD from "./components/Crud/serieCRUD";
import SpecieCRUD from "./components/Crud/specieCRUD";
import TechnologieCRUD from "./components/Crud/technologiesCRUD";
import VehicleCRUD from "./components/Crud/vehiclesCRUD";
import WeaponCRUD from "./components/Crud/weaponsCRUD";
import ErrorPage from "./page/ErrorPage";
import ValidatePage from "./page/Validate";
import { useCookies } from "react-cookie";

function App() {

  const [cookie] = useCookies(["username", "token"]);

  return (
    <div className="App bg-dark">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route
          path="validateEmail"
          element={
            !cookie.username  ? (
              <ValidatePage />
            ) : (
              <ErrorPage message="This user has already been verified" />
            )
          }
        />
        <Route
          path="validateEmail/:verify"
          element={
            !cookie.username  ? (
              <ValidatePage />
            ) : (
              <ErrorPage message="This user has already been verified" />
            )
          }
        />

        <Route path="/characters">
          <Route index element={<Character />} />
          <Route path="create" element={<CharacterCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<CharacterCRUD action="Update" />} />
          <Route path=":id" element={<SingleCharacter />} />
        </Route>

        <Route path="/creatures">
          <Route index element={<Creature />} />
          <Route path="create" element={<CreatureCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<CreatureCRUD action="Update" />} />
          <Route path=":id" element={<SingleCreature />} />
        </Route>

        <Route path="/droids">
          <Route index element={<Droid />} />
          <Route path="create" element={<DroidCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<DroidCRUD action="Update" />} />
          <Route path=":id" element={<SingleDroid />} />
        </Route>

        <Route path="/factions">
          <Route index element={<Faction />} />
          <Route path="create" element={<FactionCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<FactionCRUD action="Update" />} />
          <Route path=":id" element={<SingleFaction />} />
        </Route>

        <Route path="/movies">
          <Route index element={<Movie />} />
          <Route path="create" element={<MovieCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<MovieCRUD action="Update" />} />
          <Route path=":id" element={<SingleMovie />} />
        </Route>

        <Route path="/series">
          <Route index element={<Serie />} />
          <Route path="create" element={<SerieCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<SerieCRUD action="Update" />} />
          <Route path=":id" element={<SingleSerie />} />
        </Route>

        <Route path="/species">
          <Route index element={<Specie />} />
          <Route path="create" element={<SpecieCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<SpecieCRUD action="Update" />} />
          <Route path=":id" element={<SingleSpecie />} />
        </Route>

        <Route path="/technologies">
          <Route index element={<Technologie />} />
          <Route path="create" element={<TechnologieCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route
            path="edit/:id"
            element={<TechnologieCRUD action="Update" />}
          />
          <Route path=":id" element={<SingleTechnologie />} />
        </Route>

        <Route path="/vehicles">
          <Route index element={<Vehicle />} />
          <Route path="create" element={<VehicleCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<VehicleCRUD action="Update" />} />
          <Route path=":id" element={<SingleVehicle />} />
        </Route>

        <Route path="/weapons">
          <Route index element={<Weapon />} />
          <Route path="create" element={<WeaponCRUD action="Create" />} />
          <Route
            path="edit"
            element={
              <ErrorPage message="To make the change, it is necessary to specify ID" />
            }
          />
          <Route path="edit/:id" element={<WeaponCRUD action="Update" />} />
          <Route path=":id" element={<SingleWeapon />} />
        </Route>

        <Route path="*" element={<ErrorPage code={404} message="Invalid routes, page not found" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
