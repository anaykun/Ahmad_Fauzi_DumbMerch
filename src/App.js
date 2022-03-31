import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { NavStore } from "./pages/NavStore";
import Register from "./pages/Register";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/navbar" element={<NavStore />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    );
  }
}
