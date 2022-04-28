import React, { useState, useEffect } from 'react'
import Products from '../../components/Products/Products';
import Pagination from '@mui/material/Pagination/';
import Stack from '@mui/material/Stack';
import { ProductData } from '../../interfaces';
import './Home.css';

type HomeProps = {
  productData: ProductData[];
}

const Home = ({productData}: HomeProps) => { 
  const [productsArray, setProductsArray] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);

  useEffect(() => {
    setProductsArray(productData)
  }, productData)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const numberOfPages = Math.ceil(productsArray.length / productsPerPage)
  const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="home-page_container">
      <Products productsArray={currentProducts}></Products>
      <Stack className="pagination" spacing={2} sx={{ justifyContent: 'center'}}>
        <Pagination count={numberOfPages}  page={currentPage} onChange={handlePageChange} shape="rounded"/>
      </Stack>
    </div>
  )
}

export default Home