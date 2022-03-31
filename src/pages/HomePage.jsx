import React, { useState } from "react";
import { NavStore } from "./NavStore";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Mouse",
      des: "Mouse is ...",
      price: 500000,
      qty: 600,
      image:
        "https://media.discordapp.net/attachments/952980043154468874/958781223931625512/Rectangle_4.jpg?width=203&height=263",
    },
    {
      id: 2,
      title: "Keyboard",
      des: "Keyboard is ...",
      price: 700000,
      qty: 600,
      image:
        "https://media.discordapp.net/attachments/952980043154468874/958781224107782174/Rectangle_4_1.jpg?width=203&height=263",
    },
    {
      id: 3,
      title: "Bag",
      des: "Bag is ...",
      price: 300000,
      qty: 600,
      image:
        "https://media.discordapp.net/attachments/952980043154468874/958781224321679360/Frame.jpg?width=223&height=223",
    },
    {
      id: 4,
      title: "Stationary",
      des: "Stationary is ...",
      price: 25000,
      qty: 600,
      image:
        "https://keydifferences.com/wp-content/uploads/2019/01/stationary-vs-stationery.jpg",
    },
    {
      id: 5,
      title: "Doll",
      des: "Doll is ...",
      price: 125000,
      qty: 600,
      image: "https://wallpaperaccess.com/full/275263.jpg",
    },
    {
      id: 6,
      title: "Pillow",
      des: "Pillow is ...",
      price: 300000,
      qty: 600,
      image: "https://m.media-amazon.com/images/I/61TWQS-3zUL._AC_SX679_.jpg",
    },
  ]);

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate("/detail");
  };
  return (
    <div>
      <div>
        <NavStore />
      </div>
      <div className="">
        <div className="p-5 mx-5">
          <div className="text-light mb-5">
            <h1 className="">Product</h1>
          </div>
          <div className="">
            <div className="">
              <div className="row p-0">
                {data.map((product) => (
                  <div
                    key={product.id}
                    className="mx-2 my-2 rounded-top"
                    style={{
                      background: "rgba(210, 210, 210, 0.25)",
                      width: "241px",
                      height: "410",
                      padding: "0",
                    }}
                  >
                    <div className="p-0">
                      <img
                        className="rounded-top"
                        src={product.image}
                        alt=""
                        style={{
                          height: "312px",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="p-2 ">
                      <div>
                        <h3
                          className="text-danger fw-bold fs-5 m-0"
                          style={{ cursor: "pointer" }}
                          onClick={handleDetail}
                        >
                          {product.title}
                        </h3>
                        <p className="m-0 fw-lighter text-light">
                          Rp. {product.price}
                        </p>
                        <p className="m-0 fw-light text-light">
                          Stock: {product.qty}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* hjkl */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
