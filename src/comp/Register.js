import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };


  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Layout>
      <div className="row justify-content-md-center mt-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Register</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user}
                    onChange={handleUserChange}
                  />
                </div><div className="mb-3">
                  <label htmlFor="nom" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    value={user}
                    onChange={handleUserChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;