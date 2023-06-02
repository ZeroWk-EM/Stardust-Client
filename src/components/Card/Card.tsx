import { Link } from "react-router-dom";
import "./Card.css";
const Card = (props: { image: string; full_name: string; id: string }) => {
  return (
    <div className="col-md-3">
      <Link to={props.id} style={{textDecoration:"none"}}>
        <div
          className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg sizig_img"
          style={{
            minHeight: "500px",
            background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${props.image})`,
          }}
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3
              className="display-6 lh-1 fw-bold"
              style={{ paddingTop: "20rem" }}
            >
              {props.full_name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
