import React from "react";
import { NavStore } from "./NavStore";
import profilStore from "../assets/ProfilStore.svg";
import Mouse from "../assets/Mouse.svg";
import Frame from "../assets/Frame.svg";

export default function ProfilStore() {
  return (
    <div>
      <div>
        <NavStore />
      </div>
      <div className="container-fluid p-5">
        <div className="container-profil d-flex px-5 justify-content-center">
          <div className="container-profil me-5">
            <div className="headerProfil text-danger mb-5">
              <h1 className="fs-1">My Profil</h1>
            </div>
            <div className="container-profil d-flex">
              <div className="profil-image me-4">
                <img className="profil-image" src={profilStore} alt="" />
              </div>
              <div className="text-light fs-6  ">
                <div className="">
                  <h3 className="text-danger m-0">Name</h3>
                  <p>Yosep</p>
                </div>
                <div>
                  <h3 className="text-danger m-0">Email</h3>
                  <p>yosepgans@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-danger m-0">Phone</h3>
                  <p>083896833122</p>
                </div>
                <div>
                  <h3 className="text-danger m-0">Gender</h3>
                  <p>Male</p>
                </div>
                <div style={{ width: "355px", textAlign: "justify" }}>
                  <h3 className="text-danger m-0">Address</h3>
                  <p className="profil-image-p" style={{ lineHeight: "1.2em" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum corrupti ratione necessitatibus iste ipsa, fuga
                    animi, dicta commodi nulla consequatur voluptas, eligendi et
                    dignissimos?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-trans text-danger">
              <h1 className="fs-1 mb-5 container-trans">My Transaction</h1>
            </div>
            <div
              className=" d-flex justify-content-between"
              style={{
                width: "524px",
                height: "145px",
                background: "#303030",
                marginTop: "50px",
              }}
            >
              <div className="container-profil d-flex align-items-center px-4 ">
                <div>
                  <img
                    className="me-2"
                    style={{ width: "80px", height: "130px" }}
                    src={Mouse}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-light">
                    <h3 className="fs-5 mb-0 text-danger fw-bold">Mouse</h3>
                    <h5 className="fs-6 mb-0 text-danger">
                      Saturday, <span className="fw-light">14 July 2021</span>
                    </h5>
                    <p className="fs-6 mb-3 fw-light">Price : Rp. 500.000</p>
                    <p className="fs-6 m-0"> Sub Total: 500.000</p>
                  </div>
                </div>
              </div>
              <div className=" container-profil container-image-profil d-flex align-items-center px-4">
                <img
                  className="container-none container-image-profil"
                  style={{ width: "80px", height: "130px" }}
                  src={Frame}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
