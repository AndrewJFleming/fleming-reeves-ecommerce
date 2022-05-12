import React, { useState, useEffect } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Products from '../../components/Products/Products';
import Pagination from '@mui/material/Pagination/';
import Stack from '@mui/material/Stack';
import { ProductData } from '../../interfaces';
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

type HomeProps = {
  productData: ProductData[];
  handleFavorite: any;
  favoritesIds: string[];
};

const Home = ({
  productData,
  handleFavorite,
  favoritesIds
}: HomeProps) => {
  const [productsArray, setProductsArray] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [searchString, setSearchString] = useState('');

  useEffect(
    () => {
      setProductsArray(productData);
    },
    [productData]
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handlePageNumberChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setProductsPerPage(parseInt(value));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const numberOfPages = Math.ceil(
    productsArray.length / productsPerPage
  );
  const currentProducts = productsArray.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const filteredProducts = productsArray.filter(
    product => product.title == searchString
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <SearchBar
          placeholder={'Search by title'}
          data={productsArray}
        />
      </Box>

      <Products
        productsArray={currentProducts}
        favoritesIds={favoritesIds}
        handleFavorite={handleFavorite}
      />

      <Stack
        className="pagination"
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '55px'
        }}
      >
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
        <label
          className="pagination-dropdown_label"
          htmlFor="products-per-page"
        >
          Items per page:
        </label>
        <select
          onChange={handlePageNumberChange}
          className="pagination-dropdown_menu"
          name="products-per-page"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </Stack>
    </Container>
  );
};

export default Home;
