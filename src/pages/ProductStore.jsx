import React from "react";
import categories from "../components/Map";
import { Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavStoreUser } from "./NavStoreUser";

export default function ProductStore() {
  const [data, setData] = useState(categories);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editProduct = () => {
    navigate("/edit-product");
  };

  return (
    <div>
      <div>
        <NavStoreUser />
      </div>
      <div className="container-fluid p-5">
        <div className="mx-5">
          <div className="mb-5 text-light">
            <h1>List Category</h1>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr className="fs-5">
                <th>No</th>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Product Desc</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr className="align-middle bg-dark" key={category.id}>
                  <td>{index + 1}</td>
                  <td className="table-des">{category.image}</td>
                  <td>{category.title}</td>
                  <td>{category.des}</td>
                  <td>{category.price}</td>
                  <td>{category.qty}</td>
                  <td>
                    <Button
                      onClick={editProduct}
                      className="btn btn-success me-3"
                    >
                      Edit
                    </Button>
                    <Button onClick={handleShow} className="btn btn-danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
        <Modal.Footer>
          <Button className="px-5 py-1" variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button className="px-5 py-1" variant="success" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
