import "../Auth.css"

const RegisterModal = () => {
return (
    <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
  <div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Register</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-3" id="usernameReg" placeholder="Inser Your Name" />
            <label htmlFor="usernameReg">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="etextmail" className="form-control rounded-3" id="lastnameREG" placeholder="Insert Your Surname" />
            <label htmlFor="lastnameREG">Surname</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rounded-3" id="nicknameREG" placeholder="Insert Your Nickname" />
            <label htmlFor="nicknameREG">Nickname</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="emailREG" placeholder="Insert Your Email" />
            <label htmlFor="emailREG">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="passowordREG" placeholder="Insert Your Password"/>
            <label htmlFor="passowordREG">Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-warning" type="submit">Register</button>
          <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
</div>
)
}

export default RegisterModal