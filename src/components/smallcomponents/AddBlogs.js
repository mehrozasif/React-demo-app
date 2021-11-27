import React from "react";
import { Modal, Button } from "react-bootstrap";
function AddBlogs(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="for">
          <div className="form-group my-1">
            <label className="text-grey">Title</label>
            <input
              type="text"
              onChange={(e) => props.setTitle(e.target.value)}
              value={props.title}
              className="form-control"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group my-2">
            <label className="text-grey">Description</label>
            <textarea
              type="text"
              onChange={(e) => props.setDescription(e.target.value)}
              value={props.description}
              className="form-control"
              placeholder="Enter description"
            />
          </div>
          <div className="float-right mx-auto">
            <button
              className="btn bg-sky br-8 px-3 border-0 btn-small text-white"
              onClick={props.onSubmitBlog}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddBlogs;
