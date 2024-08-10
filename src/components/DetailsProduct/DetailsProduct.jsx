import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import HeaderProduct from "../../seactions/HeaderProduct/HeaderProduct";
import "./DetailsProduct.css";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(ProductContext);

  const handelAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  };

  if (!selectedProduct) {
    return (
      <div>
        <HeaderProduct />
        <div
          className="d-flex justify-content-center align-items-start"
          style={{  marginTop: "100px" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderProduct />
      <section style={{ marginTop: "100px" }} className="container ">
        <div className="d-flex align-items-center flex-column">
          <h1 className="mb-6 omar">{selectedProduct.category}</h1>
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ">
            <div className="col-md">
              <img
                src={selectedProduct.image}
                style={{
                  width: "300px",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  border: "1px solid #ddd",
                  padding: "5px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                alt={selectedProduct.title}
                className="img-del"
              />
            </div>
            <div
              className=" col-md text-center p-3 w-100 text-start "
              style={{
                width: "300px",
                borderRadius: "10px",
                // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                // border: "1px solid #ddd",
                padding: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease-in-out",
                // cursor: "pointer",
              }}
            >
              <h5
                className="text-start"
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "10px",
                  color: "#ddc6b6",
                  textAlign: "start",
                  fontSize: "20px",
                  lineHeight: "1.5",
                  whiteSpace: "pre-line",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  maxWidth: "100%",
                  maxHeight: "100px",
                }}
              >
                {selectedProduct.title}
              </h5>
              <p
                className="text-start"
                style={{
                  // fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "10px",
                  color: "#808080",
                  lineHeight: "1.5",
                  textAlign: "start",
                  whiteSpace: "pre-line",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  maxWidth: "100%",
                  maxHeight: "100px",
                }}
              >
                {selectedProduct.description}
              </p>
              <h6
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "#808080",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "20px",
                  textAlign: "start",
                  lineHeight: "1.5",
                  whiteSpace: "pre-line",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  maxWidth: "100%",
                  maxHeight: "100px",
                }}
              >
                Price:{" "}
                <span
                  style={{
                    color: "#ddc6b6",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  ${selectedProduct.price}
                </span>
              </h6>
              <Link
                className="btn btn-dark"
                onClick={() => handelAddToCart(selectedProduct)}
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
