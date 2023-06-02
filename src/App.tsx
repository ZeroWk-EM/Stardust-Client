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

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/characters">
          <Route index element={<Character />} />
          <Route path=":id" element={<SingleCharacter />} />
        </Route>

        <Route path="/creatures">
          <Route index element={<Creature />} />
          <Route path=":id" element={<SingleCreature />} />
        </Route>

        <Route path="/droids">
          <Route index element={<Droid />} />
          <Route path=":id" element={<SingleDroid />} />
        </Route>

        <Route path="/factions">
          <Route index element={<Faction />} />
          <Route path=":id" element={<SingleFaction />} />
        </Route>

        <Route path="/movies">
          <Route index element={<Movie />} />
          <Route path=":id" element={<SingleMovie />} />
        </Route>

        <Route path="/series">
          <Route index element={<Serie />} />
          <Route path=":id" element={<SingleSerie />} />
        </Route>

        <Route path="/species">
          <Route index element={<Specie />} />
          <Route path=":id" element={<SingleSpecie />} />
        </Route>

        <Route path="/technologies">
          <Route index element={<Technologie />} />
          <Route path=":id" element={<SingleTechnologie />} />
        </Route>

        <Route path="/vehicles">
          <Route index element={<Vehicle />} />
          <Route path=":id" element={<SingleVehicle />} />
        </Route>

        <Route path="/weapons">
          <Route index element={<Weapon />} />
          <Route path=":id" element={<SingleWeapon />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
