import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Loginform = (props) => {
  const notify = (message) => {
    toast.error(message, {
      theme: "colored",
    });
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = data;
    if (email !== "user@user.com") {
      notify("Email is incorrect");
      return;
    }
    if (password !== "user") {
      notify("Password is incorrect");
      return;
    }
    dispatch({
      type: "SET_AUTH",
      payload: data,
    });
    navigate("/");
  }

  return (
    <div>
      <div className="row py-5 my-5">
        <div className="col-10 text-left col-md-8 m-auto p-4">
          <h4 className="font-weight-bold text-black mb-3">Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <label className="text-grey">Email</label>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-2">
              <label className="text-grey">Password</label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="submit"
                className="btn text-white br-8 px-5 hover-shade py-1 bg-sky zoom-in mt-lg-3"
              >
                {/* {isLoading && <i className="mr-1 fa fa-refresh fa-spin"></i>}{" "} */}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Loginform;
