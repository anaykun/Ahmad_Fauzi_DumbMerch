import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    );
  }
}
