/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import "../Auth.css";
import { useState } from "react";
import { useCookies } from "react-cookie";


const LoginModal = () => {


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [_, setCookie] = useCookies(["username","token"]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };

    try {
      axios
        .post("http://localhost:5000/v1/auth/login", loginUser)
        .then((response) => {
          setCookie("username",response.data.username)
          setCookie("token",response.data.token)
          window.alert("Login avvenuto con successo")
          window.location.reload()
        })
        .catch((error) => {

          if (error.response?.status === 400) {
            window.alert("Errore...DATI ERRATI O EMAIL NON VERIFICATA");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Login</h1>
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
                  type="email"
                  className="form-control rounded-3"
                  id="loginEmail"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="loginEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="loginPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="loginPassword">Password</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-warning"
                type="submit"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
