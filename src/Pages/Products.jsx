// src/pages/Products.jsx
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import "./Products.css";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const Products = () => {
  const { data, loading, error } = useFetch(API_URL);

  return (
    <div className="products-container">
      <h1 className="page-heading">Photos</h1>

      {/* Loading state */}
      {loading && (
        <div className="loading-state">Loading...</div>
      )}

      {/* Error state */}
      {error && (
        <div className="error-state">Error loading data</div>
      )}

      {/* Product grid */}
      {!loading && !error && data && data.length > 0 && (
        <div className="grid">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

