import "./modal.css";
import { useFilm } from "../../hook/useFilm";
const CharacterModal = (props: { action: string }) => {
  let [film] = useFilm({});
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
                    id="floatingInput"
                    placeholder="Insert url"

                  />
                  <label htmlFor="floatingInput">Insert image URL</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="Insert name"
                  />
                  <label htmlFor="floatingInput">Insert character name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Insert character surname</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="weightInput"
                    placeholder="Insert weight"
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
                  />
                  <label htmlFor="heightInput">Insert height</label>
                </div>
              </div>

              <div className="col-12">
                <select className="form-select form-select-lg" aria-label="Default select example">
                    <option selected>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Asexual">Asexual</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-12">
                <select className="form-select form-select-lg" aria-label="Default select example">
                <option selected>Select film</option>
                {film && film.map((item)=>{
                  return (
                    <option value={item.title}>{item.title}</option>
                  )
                })}
                </select>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="heightInput"
                    placeholder="Insert hair color"
                  />
                  <label htmlFor="heightInput">Insert hair color</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="heightInput"
                    placeholder="Insert skin color"
                  />
                  <label htmlFor="heightInput">Insert skin color</label>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CharacterModal