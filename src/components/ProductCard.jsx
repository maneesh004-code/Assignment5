// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

// Helper to generate a consistent color based on product ID
const getColorById = (id) => {
  if (!id) return "#3b82f6";
  const hue = (id * 137.5) % 360;
  return `hsl(${hue}, 70%, 55%)`;
};

export const ProductCard = ({ product }) => {
  const boxColor = getColorById(product.id);

  return (
    <div className="product-card">
      <div 
        className="color-box" 
        style={{ backgroundColor: boxColor }}
      />
      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>
      </div>
    </div>
  );
};



