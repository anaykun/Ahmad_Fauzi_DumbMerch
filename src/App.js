import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { NavStore } from "./pages/NavStore";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduct from "./pages/DetailProduct";
import ProfilStore from "./pages/ProfilStore";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/navbar" element={<NavStore />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/detail" element={<DetailProduct />} />
        <Route exact path="/profil" element={<ProfilStore />} />
      </Routes>
    );
  }
}
