import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Item.css";
// import "./data.json";

const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get("https://fakestoreapi.com/products");
        const response = await axios.get("data.json");
        setProducts(response.data.slice()); // Get the first 3 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div
      className="d-flex align-items-center flex-column p-2 container-fluid"
      style={{ marginTop: "100px" }}
    >
      <h1 className=" mb-4 omar">Our Products</h1>
      <div className="product-grid d-flex flex-wrap justify-content-center  ">
        {products.map((product, index) => (
          <MDBCard
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            key={product.id}
            // className={` ${index % 2 === 0 ? "" : ""}`}
            className="col-xs-12 col-sm-6 col-lg-4 col-xl-4 btn-outline-light
            btn"
            style={{
              // backgroundImage: `url(${product.image}+)`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              maxWidth: "500px",
              padding: "2rem",
              borderRadius: "10px",
              margin: "1rem",
            }}
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  style={{
                    aspectRatio: "4/5",
                    objectFit: "",
                    borderRadius: "10px",
                  }}
                  src={product.image}
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>
                    {product.title.substring(0, 15)}...
                  </MDBCardTitle>
                  <MDBCardText>
                    {product.description.substring(0, 40)}...
                  </MDBCardText>
                  <MDBCardText>
                    <button
                      className="btn btn-outline-dark  align-items-end justify-content-end "
                      variant="light"
                      href={`/products/${product.id}`}
                    >
                      View Details
                    </button>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

export default Item;
