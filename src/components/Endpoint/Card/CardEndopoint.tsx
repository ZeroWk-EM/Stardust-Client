import { Link } from "react-router-dom";

export interface EndpointCardProps {
  title?: string;
  backgroundIMG?: string;
  icon?: string;
  counter?: number;
  link?: string;
}

const CardEndpoint = (props: EndpointCardProps) => {
  const { title, backgroundIMG, icon, counter, link } = props;
  return (
    <Link to={String(link)} style={{textDecoration:"none"}}>
    <div className="col">
     
        <div
          className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style={{
            backgroundImage: `url(${backgroundIMG})`,
            backgroundSize: "cover",
            opacity: 0.8,
          }}
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <img
                  src={icon}
                  alt=""
                  height={30}
                  width={30}
                  style={{ filter: "invert(1)" }}
                />
                <small style={{ marginLeft: "7px" }}>{counter}</small>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </Link>

  );
};

export default CardEndpoint;
