import React from "react";
import { NavStore } from "./NavStore";
import Mouse from "../assets/Mouse.svg";

function DetailProduct() {
  return (
    <div className="container-fluid ">
      <div>
        <NavStore />
      </div>
      <div className=" container-card w-75 m-auto py-5">
        <div className="detail-card d-flex">
          <div className="image-detail w-100">
            <img
              src={Mouse}
              alt=""
              style={{
                width: "330px",
                objectFit: "fill",
              }}
            />
          </div>
          <div className="detail-detail ms-5 text-light m-0 ">
            <h1 className="fs-3 text-danger my-4 ">Mouse</h1>
            <h5 className="mb-4">Stock: 600</h5>
            <div style={{ widht: "50px", height: "325px" }}>
              <ul className="mb-4">
                <li>Wireless Mouse</li>
                <li>Konektivitas wireless 2.4 GHz</li>
                <li>Jarak wireless hingga 10 m</li>
                <li>Plug and Play</li>
                <li>Baterai tahan hingga 12 bulan</li>
              </ul>
              <p className="mb-5" style={{ textAlign: "justify" }}>
                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol
                mouse yang ringan dan mudah dibawa. Mouse ini menggunakan
                frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur
                sensor canggih optik pelacakan dengan penerima USB yang kecil.
                Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup
                baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac
                OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS
              </p>
            </div>

            <div className="text-end mb-4">
              <h3 className="text-danger">Rp. 300.000</h3>
            </div>
            <div className="w-100">
              <button className="btn btn-danger w-100">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
