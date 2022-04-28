import React, { useState } from 'react'
import Products from '../../components/Products/Products';
import Pagination from '@mui/material/Pagination/';
import Stack from '@mui/material/Stack';
import { products } from '../../data';

type Props = {}

const Home = (props: Props) => { 
  const [productsArray, setProductsArray] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const numberOfPages = Math.ceil(productsArray.length / productsPerPage)
  const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <Products productsArray={currentProducts}></Products>
      <Stack spacing={2} sx={{ justifyContent: 'center'}}>
        <Pagination count={numberOfPages}  page={currentPage} onChange={handlePageChange} shape="rounded"/>
      </Stack>
    </div>
  )
}

export default Home