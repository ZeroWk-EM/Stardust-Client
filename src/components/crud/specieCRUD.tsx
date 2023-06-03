import "./css/crud.css";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SpecieCRUD = (props: { action: string }) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="card py-5">
          <div className="title">
            <h1 className="fs-3 mb-5 text-center">{props.action} Specie</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecieCRUD;
