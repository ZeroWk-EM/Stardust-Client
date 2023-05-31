import plus from "./asset/plusIcon.svg";

const NewElement = (props: { title: string }) => {
  return (
    <div className="col-md-3">
      <div className="card text-center" style={{minHeight:"500px"}}>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
          <h5 className="card-title">Add {props.title}</h5>
          <button
            type="button"
            className="btn btn-dark rounded-circle p-0"
            data-mdb-toggle="modal"
            data-mdb-target="#myModal"
          >
            <img src={plus} alt="" style={{ filter: "invert(1)" }} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewElement;
