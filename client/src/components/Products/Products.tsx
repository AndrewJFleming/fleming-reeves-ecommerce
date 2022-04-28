import React, { FC, Component, useState } from 'react'
import Product from './Product/Product';
import './Products.css';


export interface ProductData {
    data: 
        {
             id: string;
             title: string;
             desc: string;
             price: number;
             categories: Array<string>;
             isFeatured: boolean;
             squareThumbUrl: string;
             largeUrl: string;
             fullsizeUrl: string;
             variants?: Array<
               {
                 id: string;
                 name: string;
                 squareThumbUrl: string;
                 largeUrl: string;
                 fullsizeUrl: string;
               }
             >,
           },
  }

  interface ProductsProps {
    productsArray: Array<ProductData["data"]>;
  }

 

const Products = (props: ProductsProps) => {

 

    let allProducts = props.productsArray.map((product) => {
        return <Product imageId={product.id} imageUrl={product.squareThumbUrl} title={product.title} desc={product.desc}/>
    })

  return (
    <div className="products-container">{allProducts}</div>
  )
}

export default Products;