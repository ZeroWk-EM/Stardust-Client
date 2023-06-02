import "./modal.css";
import { useMovie } from "../../hook/useMovie";
import { useFaction } from "../../hook/useFaction";
const CharacterModal = (props: { action: string }) => {
  let [film] = useMovie({});
  let [faction] = useFaction({});
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.action} Character
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="urlInput"
                    placeholder="Insert url"
                    required
                  />
                  <label htmlFor="urlInput">Insert image URL</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="nameInput"
                    placeholder="Insert name"
                    required
                  />
                  <label htmlFor="nameInput">Insert character name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="surnameInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="surnameInput">Insert character surname</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="weightInput"
                    placeholder="Insert weight"
                    required
                  />
                  <label htmlFor="weightInput">Insert weight</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="heightInput"
                    placeholder="Insert height"
                    required
                  />
                  <label htmlFor="heightInput">Insert height</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="hairInput"
                    placeholder="Insert hair color"
                  />
                  <label htmlFor="hairInput">Insert hair color</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="skinInput"
                    placeholder="Insert skin color"
                    required
                  />
                  <label htmlFor="skinInput">Insert skin color</label>
                </div>
              </div>

              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Asexual">Asexual</option>
                  <option value="Unknown">Unknown</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select eye color</option>
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

              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected>Select homeworld</option>

                </select>
              </div>

              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select specie</option>
         
                </select>
              </div>

              <div className="col-md-7">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="birthInput"
                    placeholder="Insert height"
                  />
                  <label htmlFor="birthInput">Insert birth year</label>
                </div>
              </div>

              <div className="col-5">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                  style={{ minHeight: "57px" }}
                >
                  <option selected>Select period</option>
                  <option value="ABY">ABY</option>
                  <option value="BBY">BBY</option>
                </select>
              </div>

              <div className="col-6">
                <select className="form-select form-select-lg">
                  <option selected>Select film</option>
                  {film &&
                    film.map((item) => {
                      return <option value={item.title}>{item.title}</option>;
                    })}
                </select>
              </div>

              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected>Select series</option>
                  
                </select>
              </div>
              <div className="col-12">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected>Select Faction</option>
                  {faction &&
                    faction.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected>Select Vehicles</option>
           
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select form-select-lg"
                  aria-label="Default select example"
                >
                  <option selected>Select Weapons</option>
              
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
