import { Link } from "react-router-dom";
import plus from "./asset/plusIcon.svg";

const NewElement = (props: { title: string; link?: string }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card text-center h-100" style={{ minHeight: "500px" }}>
          <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <h5 className="card-title">Add {props.title}</h5>
            <Link to="create" className="btn btn-dark rounded-circle p-0">
              <img src={plus} alt="" style={{ filter: "invert(1)" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewElement;
