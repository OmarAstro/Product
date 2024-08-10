import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const response = await fetch("data.json");
        const data = await response.json(); // response get fich
        setProducts(data);
        setFilteredProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(["all", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
    } else {
      setCart(cart);
    }
  };

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedCategory(selectedProduct.category);
    } else {
      setSelectedCategory("all");
    }
  }, [selectedProduct]);
  

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
        setCart,
        filteredProducts,
        setFilteredProducts,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        removeFromCart,
        clearCart,
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
