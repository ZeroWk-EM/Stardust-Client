const Card = (props: { image: string; full_name: string }) => {
  return (
    <div className="col-md-3">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          minHeight: "500px",
          background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${props.image})`,
          backgroundSize: `cover`,
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
    </div>
  );
};

export default Card;
