import React, { useState } from "react";
import Blogs from "./Blogs/Blogs";
import AddBlogs from "./smallcomponents/AddBlogs";
import Header from "./smallcomponents/Header";
import blue_Png from "../assets/images/blueball.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const info = (message) => {
    toast.info(message, {
      theme: "colored",
    });
  };
  const success = (message) => {
    toast.success(message, {
      theme: "colored",
    });
  };
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitBlog = (e) => {
    e.preventDefault();
    if (title == "") {
      info("Please enter  title");
      return;
    } else if (description == "") {
      info("Description enter description");
      return;
    } else {
      setBlogs([
        ...blogs,
        { id: Math.random().toString(36).slice(2), title, description },
      ]);
      setTitle("");
      setDescription("");
      setModalShow(false);
      success("Blog added successfully");
      return;
    }
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Header />
      <div className="row mx-auto">
        <div className="col-12 col-md-11 col-lg-10 col-9 mx-auto my-xl-4 my-3">
          <div className="br-15 bg-white shade hover-shade over-flow-none pb-xl-4 pb-md-3 pb-3 position-relative row mx-auto">
            <div className="bg-lighter mx-auto py-2">
              <h1 className="font-weight-bold text-center mb-0">BLOGS</h1>
            </div>
            <div className="col-12 text-center my-3">
              <button
                className="ml-auto bg-sky border-0 font-weight-bold hover-shade text-white px-5 br-15 py-1 py-xxl-2"
                onClick={() => setModalShow(true)}
              >
                Add Blog <span className="fa fa-plus small"></span>
              </button>
            </div>
            <img
              className="position-absolute mt-5 blue-ball d-md-block d-none"
              src={blue_Png}
              alt="blue_ball"
            />
            <div className="col-xl-11 px-0 mx-auto col-12">
              <div className="row mx-auto">
                <Blogs blogs={blogs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <AddBlogs
        show={modalShow}
        onHide={() => setModalShow(false)}
        setTitle={setTitle}
        title={title}
        setDescription={setDescription}
        description={description}
        onSubmitBlog={onSubmitBlog}
      />
    </div>
  );
};

export default Dashboard;
