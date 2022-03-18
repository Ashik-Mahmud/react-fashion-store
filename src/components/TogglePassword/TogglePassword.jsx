import React, { useState } from "react";

export default function TogglePassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <h4>Login into Account</h4>
            </div>
            <div className="card-body">
              <div className="my-3">
                <label className="d-block" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control form-control-lg rounded-0"
                />
              </div>
              <div className="my-3">
                <label className="d-block" htmlFor="password">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={isShow ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="form-control form-control-lg rounded-0"
                  />
                  <button
                    onClick={() => setIsShow(!isShow)}
                    className="btn btn-primary rounded-0"
                  >
                    {isShow ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer text-center  p-3">
              <div>
                <h4>Username</h4>
                <p>{username}</p>
              </div>
              <div>
                <h4>Password</h4>
                <p className="h4">
                  {isShow ? password : "*".repeat(password.length)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
