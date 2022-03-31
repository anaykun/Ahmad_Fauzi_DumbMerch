import { NavStoreUser } from "./NavStoreUser";
import { Table, Button, Modal } from "react-bootstrap";
import categories from "../components/Map";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryStore() {
  const [data, setData] = useState(categories);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editCategory = () => {
    navigate("/edit-category");
  };

  // const deleteCategory = (categoryId) => {
  //   const deletes = categories.filter((category) => category.id !== categoryId);
  //   setData(deletes);
  // };

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
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr className="align-middle" key={category.id}>
                  <td className="col-3">{index + 1}</td>
                  <td>{category.title}</td>
                  <td className="col-4">
                    <button
                      onClick={editCategory}
                      className="btn btn-success me-3 px-5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleShow}
                      className="btn btn-danger px-5"
                    >
                      Delete
                    </button>
                  </td>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want to delete this data?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="px-5 py-1"
                        variant="danger"
                        onClick={handleClose}
                      >
                        No
                      </Button>
                      <Button
                        className="px-5 py-1"
                        variant="success"
                        onClick={handleClose}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
