import React from 'react'
import Products from '../../components/Products/Products';
import { products } from '../../data';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Products productsArray={products}></Products>
    </div>
  )
}

export default Home