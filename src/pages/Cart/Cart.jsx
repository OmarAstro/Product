import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import HeaderCart from "../../seactions/HeaderCart/HeaderCart";
import { Link } from "react-router-dom";
import "../../context/ProductContext";

const Cart = () => {
  const { setSelectedProduct, removeFromCart, clearCart } =
    useContext(ProductContext);
  const { cart } = useContext(ProductContext);
  const handelProductClick = (product) => {
    // update product ( map )
    setSelectedProduct(product);
  };
  const handelremoveCart = (product) => {
    removeFromCart(product);
  };
  const handelclearCart = (product) => {
    clearCart(product);
  };
  return (
    <>
      <HeaderCart />
      <section
        className="container d-flex align-items-center flex-column p-2 justify-content-center"
        style={{ marginTop: "100px" }}
      >
        {/* <h1 className="mb-6 omar " >Cart</h1> */}
        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-outline-dark mx-3" to="/ListProduct">
                Product
              </Link>
              <Link className="btn btn-dark " to="/Product">
                Home
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="container"
            style={{
              display: "block",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "start",
              alignItems: "start",
              gap: "20px",
              padding: "20px",
              marginTop: "20px",
              // marginBottom: "20px",
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              borderRadius: "10px",
            }}
          >
            {cart.map((product) => (
              <div
                // to={`/DetailsProduct/${product.id}`}
                // onClick={() => handelProductClick(product)}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  // flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: "10px",
                  padding: "10px",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  transition: "0.3s",
                  cursor: "pointer",
                  borderRadius: "10px",
                  marginTop: "20px",
                  // marginBottom: "20px",
                  backgroundColor: "white",
                  color: "black",
                  textDecoration: "none",
                }}
                key={product.id}
              >
                <img
                  data-aos="fade-right"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  src={product.image}
                  alt=""
                />
                <h3
                  data-aos="fade-left"
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    color: "black",
                  }}
                >
                  {product.title.substring(0, 15)}...
                </h3>
                <p
                  data-aos="fade-left"
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Price:{" "}
                  <span style={{ color: "#ddc6b6" }}>${product.price}</span>
                </p>

                <button
                  data-aos="fade-left"
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    // color: "black",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                    }}
                  className="btn btn-outline-danger btn-sm text-end"
                  onClick={() => handelremoveCart(product)}
                >
                  x
                </button>
              </div>
            ))}
            <div style={{ marginTop: "20px", marginBottom: "20px", width: "100%" }} className="text-center d-flex justify-content-center align-items-center gap-5">
            <button
              onClick={() => handelclearCart(cart)}
              className="btn btn-danger text-center"
              style={{
                color: "#fafafa",

                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
                textAlign: "center",
                // width: "100%",
                borderRadius: "10px",
              }}
            >
              clear cart
            </button>
            <button
              onClick={() => handelclearCart(cart)}
              className="btn btn-dark text-center"
              style={{
                color: "#ddc6b6",
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
                textAlign: "center",
                // width: "100%",
                borderRadius: "10px",
              }}
            >
              bay
            </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
