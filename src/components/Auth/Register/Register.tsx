import axios from "axios";
import "../Auth.css";
import { useState } from "react";

const RegisterModal = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      image: "null",
      name,
      surname,
      username,
      email,
      password,
    };
    try {
      axios
        .post("http://localhost:5000/v1/auth/register", newUser)
        .then(() => {
          window.alert("Utente registrato con successo, verifica l'email");
        })
        .catch((e) => {
          if (Number(e.response?.status) === 409) {
            window.alert("Email già presente, utilizzarne un'altra");
          }
          if (Number(e.response?.status) === 400) {
            window.alert("Errore nella creazione dell'utente");
          }
        });
    } catch (e) {
      console.log("Error to make request ", e);
    }
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Register</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="usernameReg"
                  placeholder="Inser Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="usernameReg">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="lastnameREG"
                  placeholder="Insert Your Surname"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
                <label htmlFor="lastnameREG">Surname</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="usernameREG"
                  placeholder="Insert Your Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <label htmlFor="usernameREG">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="emailREG"
                  placeholder="Insert Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="emailREG">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="passowordREG"
                  placeholder="Insert Your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="passowordREG">Password</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-warning"
                type="submit"
              >
                Register
              </button>
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
