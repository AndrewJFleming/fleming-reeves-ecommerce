import React, { Component } from 'react'
import './Product.css';
import { Link } from 'react-router-dom';

interface ProductProps {
    imageId: string;
    imageUrl: string;
    title: string;
    desc: string;
}



const Product = (props: ProductProps) => {
  return (
    <Link className="product-card_link" to={"/products/" + props.imageId}><div className="product-card">
        <img className="product-card_image" src={props.imageUrl} alt="Thumbnail image of the artwork being sold"/>
        <h2 className="product-card_title">{props.title}</h2>
        <h3 className="product-card_desc">{props.desc}</h3>
    </div></Link>
  )
}

export default Product;