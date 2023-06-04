/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ValidatePage = () => {
  const { verify } = useParams();
  const [validate, setValidate] = useState<string>("");

  useEffect(() => {
    if (verify) setValidate(String(verify));
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      axios
        .get(`http://localhost:5000/v1/auth/validate/${validate}`)
        .then(() => {
          window.alert("VERIFICATO");
        })
        .catch((e) => {
          if (e.response.status === 400) {
            window.alert(`Errore...TOKEN NON VALIDO`);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="card py-5">
          <div className="title">
            <h1 className="fs-3 mb-5 text-center">Validate Account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="token"
                name="token"
                placeholder="Insert token"
                value={String(validate)}
                onChange={(e) => setValidate(e.target.value)}
                required
              />
              <label htmlFor="image">Token</label>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="submit">
                Verifica
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidatePage;
