import React, { useState } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../interfaces';

import Modal from './Modal/Modal';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

type SingleProductProps = {
  productData: ProductData[];
};

const SingleProduct = ({ productData }: SingleProductProps) => {
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);

  let currentProduct = productData.filter(
    product => product._id === productId
  )[0];

  const ToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h2">
        {currentProduct.title}
      </Typography>

      <img
        onClick={ToggleModal}
        className="product-image"
        src={currentProduct.largeUrl}
        alt={'Preview image of' + currentProduct.title}
      />

      <p className="product-desc">
        {currentProduct.desc}
      </p>
      {showModal &&
        <div onClick={ToggleModal}>
          <Modal
            imageUrl={currentProduct.fullsizeUrl}
            title={currentProduct.title}
          />
        </div>}

      {/* May want to make the currency a variable instead of hard coding it like this */}
      <h3 className="product-price">
        {'Price: ' + currentProduct.price + '$'}{' '}
      </h3>
    </Box>
  );
};

export default SingleProduct;
