import React from "react";
import { NavStoreUser } from "./NavStoreUser";
// import categories from "../components/Map";
// import { useState } from "react";

function EditCategory() {
  // const [data, setData] = useState(categories);
  return (
    <div>
      <div>
        <NavStoreUser />
      </div>
      <div className="container-fluid d-flex p-5">
        <div className="container-fluid mx-4">
          <div className="mb-5 text-light">
            <h1>Edit Category</h1>
          </div>
          <div className="container-editcategory">
            <div className="edit-category  mb-5">
              <input
                className="fs-5 w-100 p-2 text-light fw-bold rounded"
                type="text"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  border: "2px solid #BCBCBC",
                }}
              />
            </div>
            <div className="">
              <button className="btn btn-success w-100 fs-5">
                Edit Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
