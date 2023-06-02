import plus from "./asset/plusIcon.svg";

const NewElement = (props: { title: string,children:JSX.Element }) => {
  return (
    <>
    <div className="col-md-3">
      <div className="card text-center h-100" style={{minHeight:"500px"}}>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
          <h5 className="card-title">Add {props.title}</h5>
          <button
            type="button"
            className="btn btn-dark rounded-circle p-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src={plus} alt="" style={{ filter: "invert(1)" }} />
          </button>
        </div>
      </div>
    </div>
    {props.children}
    </>
  );
};
export default NewElement;
