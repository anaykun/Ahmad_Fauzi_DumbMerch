import React from "react";
import { NavStoreUser } from "./NavStoreUser";

export default function EditProduct() {
  return (
    <div>
      <div>
        <NavStoreUser />
      </div>
      <div className="container-fluid d-flex p-5">
        <div className="container-fluid mx-4">
          <div className="mb-5 text-light">
            <h1>Edit Product</h1>
          </div>
          <div className="container-editcategory">
            <div className="edit-category  mb-3">
              <input
                className="custom-file-input fs-6 text-light rounded "
                type="file"
                style={{
                  //   background: "rgba(210, 210, 210, 0.25)",
                  border: "none",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="edit-category  mb-3">
              <input
                className="fs-6 w-100 p-2 text-light rounded"
                type="text"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
            </div>
            <textarea
              className="w-100 mb-2 rounded text-light p-2"
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                border: "2px solid #BCBCBC",
              }}
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <div className="edit-category  mb-3">
              <input
                className="fs-6 w-100 p-2 text-light rounded"
                type="number"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
            </div>
            <div className="edit-category  mb-5">
              <input
                className="fs-6 w-100 p-2 text-light rounded"
                type="number"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
            </div>
            <div className="">
              <button className="btn btn-success w-100 fs-5">
                Edit Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
