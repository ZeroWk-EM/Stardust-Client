import "../Auth.css"

const LoginModal = () => {
return (
<div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
  <div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="loginEmail" placeholder="name@example.com" />
            <label htmlFor="loginEmail">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="loginPassword" placeholder="Password"/>
            <label htmlFor="loginPassword">Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-warning" type="submit">Log in</button>
        </form>
      </div>
    </div>
  </div>
</div>
)
}

export default LoginModal