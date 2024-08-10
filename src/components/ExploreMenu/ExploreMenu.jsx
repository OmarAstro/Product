import React, { useContext } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const ExploreMenu = () => {
  const { selectedProduct } = useContext(ProductContext);
  const {
    products,
    setSelectedProduct,
    addToCart,
    selectedCategory,
    setSelectedCategory,
    setFilteredProducts,
    categories,
    filteredProducts,
  } = useContext(ProductContext);

  const handelProductClick = (product) => {
    // update product ( map )
    setSelectedProduct(product);
  };

  const handelAddToCart = (product) => {
    addToCart(product);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  /////////////////////////////////////////

  // if (selectedProduct) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  if (!products) {
    return (
      <div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex align-items-center flex-column p-2 container-fluid"
      style={{ marginTop: "100px" }}
    >
      <h1 className=" mb-4 omar">Our Products</h1>
      <div>
        {/* <label htmlFor="category-filter">Product:</label> */}
        <div
          className="d-flex flex-wrap justify-content-center gap-3 mb-4 "
          id="category-filter"
          value={selectedCategory}
        >
          {categories.map((category) => (
            <button
              onClick={handleCategoryChange}
              className="btn btn-outline-dark btn m-2 "
              style={{
                borderRadius: "10px",
                padding: "0.5rem 1rem",
                border: "1px solid #ddc6b6",
                color: "#ddc6b6",
                transition: "all 0.3s ease",
              }}
              key={category}
              value={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid d-flex flex-wrap justify-content-center  ">
        {filteredProducts.map((product) => (
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
                    {product.description.substring(0, 12)}...
                  </MDBCardText>
                  <MDBCardText
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#ddc6b6",
                      marginBottom: "10px",
                      marginTop: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      textAlign: "center",
                    }}
                    // className="text-muted"
                  >
                    ${product.price}
                  </MDBCardText>
                  <MDBCardText className="text-muted d-flex justify-content-center">
                    <Link
                      to={"/DetailsProduct/" +  product.title.replace(/ /g, "-") + product.id}
                      onClick={() => handelProductClick(product)}
                      className="btn btn-outline-dark"
                      variant="light"
                      style={{
                        transition: "all 0.4s ease",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "10px",
                        // backgroundColor: "#ddc6b6",
                        // color: "black",
                        // width: "100px",
                        // height: "40px",
                        // fontSize: "16px",
                        // fontWeight: "bold",
                        // padding: "10px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                      // href={`/DetailsProduct/${product.id}`}
                      // href={`/DetailsProduct/${product.id}`}
                    >
                      View Details
                    </Link>
                    <button
                      className="btn btn-light justify-content-end  "
                      style={{
                        marginRight: "10px",
                        marginLeft: "15px",
                        // padding: "10px",
                        borderRadius: "50px",
                        // backgroundColor: "#ddc6b6",
                        // color: "black",/
                        border: "none",
                        cursor: "pointer",
                        // width: "100px",
                        height: "40px",
                        // fontSize: "16px",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => handelAddToCart(product)}
                    >
                      Add
                    </button>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
