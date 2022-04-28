import React, { FC, useState }  from "react";
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../components/Products/Products'; 
import { products } from '../../data';
import Modal from './Modal/Modal';

type SingleProductProps = {

}



const SingleProduct = (props: SingleProductProps) => {

  const  { productId } = useParams();
  const [ showModal, setShowModal ] = useState(false);

  let currentProduct = products.filter((product) => product.id === productId)[0];
  

  const ToggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="single-product_container">
      <h1 className="product-title">{currentProduct.title}</h1>

      <img onClick={ToggleModal} className="product-image" src={currentProduct.largeUrl} alt={"Preview image of" + currentProduct.title}/>
      
      <p className="product-desc">{currentProduct.desc}</p>
      {showModal && (<div onClick={ToggleModal}><Modal  imageUrl={currentProduct.fullsizeUrl} title={currentProduct.title}/></div>)}
      
     
     {/* May want to make the currency a variable instead of hard coding it like this */}
      <h3 className="product-price">{"Price: " + currentProduct.price + "$"} </h3>
     
      </div>
  )
}

export default SingleProduct