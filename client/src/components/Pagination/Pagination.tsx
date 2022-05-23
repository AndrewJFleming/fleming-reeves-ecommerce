import { Box } from "@mui/material";

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: Function;
}

const Pagination = (props: PaginationProps) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalProducts / props.productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Box component="nav">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => props.paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Pagination;
