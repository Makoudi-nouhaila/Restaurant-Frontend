import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/users/all")
      .then((response) => response.json())
      .then((data) => setUserdata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser = userdata.find(
      (fetchedUser) =>
        user === fetchedUser.email && password === fetchedUser.password
    );
    if (foundUser) {
      navigate("/resto");
    }
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Layout>
      <div className="row justify-content-md-center mt-5" >
        <div className="col-4" style={{padding:"15px"}}>
            <h1 style={{padding:"25px", textAlign:"center", color:"blue"}}>Restaurant locator </h1>
          <div className="card" style={{padding:"15px"}}>
            <div className="card-body">
              <h5 className="card-title mb-4" style={{textAlign:"center"}}>LOG IN </h5>
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
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
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

export default Login;