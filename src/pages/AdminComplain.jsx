import React from "react";
import { NavStore } from "./NavStore";
import { Offcanvas, Navbar } from "react-bootstrap";
import { useState } from "react";
import Frame from "../assets/Frame.svg";
import Admin from "../assets/Admin.svg";

function UserComplain() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <NavStore />
      </div>
      <div className="row">
        <div className="container-fluid col-2">
          <div className="">
            <div className="">
              <Navbar.Toggle
                aria-controls=""
                className="text-danger toggle-canvas"
                onMouseMove={handleShow}
              />
            </div>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton className="canvas-complain">
                <Offcanvas.Title>
                  <img
                    className="ms-5"
                    src={Frame}
                    style={{ width: "70px", height: "68.22px" }}
                  />{" "}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body
                className="canvas-complain w-100"
                style={{ background: "black" }}
              >
                <div className=" ms-5 my-3 d-flex">
                  <div className="d-flex ">
                    <div style={{ width: "60px", height: "60px" }}>
                      <img
                        className="image-icon"
                        src={Admin}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    <div className=" chat-name mt-2 text-light">
                      <h5 className="fs-6 ms-4 mb-0">Egi</h5>
                      <div>
                        <p className=" ms-4 mb-0 fw-lighter">
                          {" "}
                          what are u doing ??
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        <div className="coantainer-fluid col-9  ps-5">
          <div style={{ widht: "100%", height: "55vh" }}>
            <div></div>
          </div>
          <div className="ms-3 text-light text-end me-5 pe-5">
            <p
              className="m-0 fs-5 fw-bold"
              style={{ marginRight: "100px", padding: "0 90px" }}
            >
              What are u doing ??
            </p>
          </div>

          <div className="d-flex align-items-center mb-5 ">
            <div style={{ width: "60px", height: "60px" }}>
              <img
                className="image-icon"
                src={Admin}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="ms-3 text-light">
              <p className="m-0 fs-5 fw-bold">What are u doing ??</p>
            </div>
          </div>
          <div className="col-9">
            <textarea
              className="p-1 fs-3 text-light rounded "
              name=""
              id=""
              cols="50"
              rows="1"
              style={{
                widht: "100%",
                borderStyle: "none",
                background: "rgba(210, 210, 210, 0.25)",
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComplain;
