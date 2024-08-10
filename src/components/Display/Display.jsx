/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './Display.css'

// import { StoreContext } from '../../context/StoreContext'
import Item from '../Item/Item'
import axios from 'axios';
const Display = ({category}) => {

  // const {food_list} = useContext(StoreContext)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get("https://fakestoreapi.com/products");
        const response = await axios.get("data.json");
        setProducts(response.data.slice(0, 3)); // Get the first 3 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='food-display' id='food-display'>
      <h2>To dishes near you</h2>
      <div className="food-display-list">
        {products.map((product, index)=>{
          if (category==="All" || category===product.category) {
            return <Item key={index} id={product._id} name={product.name} price={product.price} description={product.description} image={product.image} />
          }
        })}
      </div>
    </div>
  )
}

export default Display