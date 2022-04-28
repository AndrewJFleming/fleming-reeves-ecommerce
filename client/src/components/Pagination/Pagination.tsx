import React from 'react'
import './Pagination.css';
import Stack from '@mui/material/Stack';

interface PaginationProps  {
    productsPerPage: number;
    totalProducts: number;
    paginate: Function;
}

const Pagination = (props: PaginationProps) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-container">
                    <a onClick={() => props.paginate(number)} href='!#' className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination