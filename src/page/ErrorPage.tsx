const ErrorPage = (props:{message:string}) => {
 
  return (
    <div className="container">
      <div className="row my-5">
        <div className="card py-5">
          <div className="title">
            <h1 className="fs-3 mb-5 text-center">ERROR PAGE</h1>
          </div>
   <p className="text-center">{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
