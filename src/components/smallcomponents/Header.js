import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  return (
    <div className="shade">
      <Navbar bg="lighter" className="text-white" expand="lg">
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="align-items-center">
              <Nav className="grey mx-2"> {state?.user}</Nav>
              <Nav className="">
                <button
                  class="btn border-0 mx-1 br-8 px-3 btn-danger text-white"
                  onClick={() => {
                    dispatch({
                      type: "LOG_OUT",
                      payload: null,
                    });
                    navigate("/login");
                  }}
                >
                  <span>Logout</span>
                  <i className="fa mx-1 pl-1 fa-sign-out"></i>
                </button>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
