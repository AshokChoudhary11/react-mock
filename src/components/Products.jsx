import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [foundProduct, setFoundProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${inputValue}`
      );
      const data = await response.json();
      setProducts(data);

      // Check if there's a product that exactly matches the input value
      const matchingProduct = data.filter(
        (product) => product.title.toLowerCase() === inputValue.toLowerCase()
      );
      setFoundProduct(matchingProduct);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    fetchProducts();
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Text"
      />
      <button onClick={handleClick}>Click</button>
      {foundProduct ? (
        <div>
          <h3>Product Found:</h3>
          <p>{foundProduct}</p>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default Products;
//trdyimg
