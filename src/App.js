import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { NavStore } from "./pages/NavStore";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilStore from "./pages/ProfilStore";
import DetailProduct from "./pages/DetailProduct";
import CategoryStore from "./pages/CategoryStore";
import EditCategory from "./pages/EditCategory";
import ProductStore from "./pages/ProductStore";
import EditProduct from "./pages/EditProduct";
import UserComplain from "./pages/UserComplain";
import AdminComplain from "./pages/AdminComplain";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/navbar" element={<NavStore />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profil" element={<ProfilStore />} />
        <Route exact path="/detail" element={<DetailProduct />} />
        <Route exact path="/category" element={<CategoryStore />} />
        <Route exact path="/edit-category" element={<EditCategory />} />
        <Route exact path="/product" element={<ProductStore />} />
        <Route exact path="/edit-product" element={<EditProduct />} />
        <Route exact path="/complain-user" element={<UserComplain />} />
        <Route exact path="/complain-admin" element={<AdminComplain />} />
      </Routes>
    );
  }
}
