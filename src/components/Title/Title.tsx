import deathStartProject from "./asset/deathStarProject.png"

const Title = () => {
  return (
  <div className="container my-5 text-white rounded-4 border-opacity-10" style={{backgroundColor:"#101011"}}>
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center shadow">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Stardust Project</h1>
        <p className="lead">This is an application developed in React as a final course project. The server API with its documentation can be reached by using the buttons located in the Navbar</p>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3 d-none d-lg-block " src={deathStartProject} alt="" width="600" />
      </div>
    </div>
  </div>
  );
};

export default Title;
