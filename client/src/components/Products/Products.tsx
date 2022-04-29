import React, { FC, Component, useState } from 'react';
import Product from './Product/Product';
import { ProductData } from '../../interfaces';
import Grid from '@mui/material/Grid';
import './Products.css';

interface ProductsProps {
  productsArray: ProductData[];
}

const Products = ({ productsArray }: ProductsProps) => {
  let allProducts = productsArray.map(product => {
    return (
      <Product
        key={product._id}
        imageId={product._id}
        imageUrl={product.squareThumbUrl}
        title={product.title}
        desc={product.desc}
      />
    );
  });

  return (
    <div className="products-container">
      {allProducts}
    </div>
  );
};

export default Products;
