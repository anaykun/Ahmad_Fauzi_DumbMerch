import React from "react";

const styles = {
  containermain: {
    display: "flex",
    flexWrap: "wrap",
  },
  leftcontainer: {
    flex: "1",
    marginRight: "54px",
  },
  img: {
    width: "436px",
    height: "555px",
  },
  rightcontainer: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  h2: {
    fontSize: "48px",
    color: "#F74D4D",
    marginBottom: "15px",
    marginTop: "30px",
  },
  p1: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "white",
  },
  pSpec: {
    fontSize: "18px",
    color: "white",
    lineHeight: "25px",
    marginBottom: "0",
  },
  pDesc: {
    fontSize: "18px",
    marginTop: "20px",
    textAlign: "justify",
    color: "white",
    marginBottom: "10px",
  },
  h6: {
    fontSize: "24px",
    color: "#F74D4D",
    textAlign: "right",
    margin: "50px 0px",
    marginBottom: "50px",
  },
  button: {
    width: "100%",
    height: "40px",
    color: "white",
    backgroundColor: "#F74D4D",
    fontSize: "18px",
  },
};

function DetailProductItem(props) {
  return (
    <div style={styles.containermain} className="detailProductItemContainer">
      <div style={styles.leftcontainer} className="detailProductLeft">
        <img style={styles.img} src={props.img} alt="" />
      </div>
      <div style={styles.rightcontainer} className="detailProductRight">
        <h2 style={styles.h2}>{props.title}</h2>
        <p style={styles.p1}>Stock : {props.stock}</p>
        <div className="stock-price">
          <p style={styles.pSpec}>-{props.spec1}</p>
          <p style={styles.pSpec}>-{props.spec2}</p>
          <p style={styles.pSpec}>-{props.spec3}</p>
          <p style={styles.pSpec}>-{props.spec4}</p>
          <p style={styles.pSpec}>-{props.spec5}</p>
        </div>
        <p style={styles.pDesc}>{props.description}</p>
        <h6 style={styles.h6}>Rp.{props.price}</h6>
        <button className="btn btn-danger" style={styles.button}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default DetailProductItem;
