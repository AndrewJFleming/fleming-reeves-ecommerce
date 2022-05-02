import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

interface ProductProps {
  imageId: string;
  imageUrl: string;
  title: string;
  desc: string;
}

const Product = ({
  imageId,
  imageUrl,
  title,
  desc
}: ProductProps) => {
  return (
    <Link className="product-card_link" to={'/products/' + imageId}>
      <div className="product-card">
        <img
          className="product-card_image"
          src={imageUrl}
          alt="Thumbnail image of the artwork being sold"
        />
        <h2 className="product-card_title">
          {title}
        </h2>
        <h3 className="product-card_desc">
          {desc.length <= 99 ? desc : `${desc.substring(0, 100)}...`}
        </h3>
      </div>
    </Link>
  );
};

export default Product;
