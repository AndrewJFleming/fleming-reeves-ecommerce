import React, { ReactEventHandler, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import './SearchBar.css';
import { ProductData } from '../../interfaces';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  createFilterOptions
} from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { Input } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
  data: ProductData[];
  placeholder: string;
};

const useStyles = makeStyles({
  searchBar: {
    margin: '25px 0px 45px 0px',
    borderRadius: '7px',
    border: '1px solid #C44343',
    height: '42px',
    width: '220px',
    '&:focus': {
      border: '3px solid #C44343'
    }
  }
});

const SearchBar = ({ data, placeholder }: Props) => {
  const classes = useStyles();

  const [filteredData, setFilteredData] = useState<ProductData[]>([]);

  const handleFilter = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord: string = event.currentTarget.value;
    const newFilter = data.filter(value => {
      let title = value.title.toLowerCase();
      let search = searchWord.toLowerCase();
      return title.includes(search);
    });

    searchWord === ''
      ? setFilteredData([])
      : setFilteredData(newFilter);
    console.log(newFilter);
  };

  return (
    <div className="search-bar">
      <div className="searchInputs">
        {/* <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data.map(option => option.title)}
          renderInput={params =>
            <TextField
              {...params}
              label="Search by Title"
              InputProps={{
                ...params.InputProps,
                type: 'search'
              }}
              sx={{
                margin: '25px 0px 45px 0px',
                border: '2px solid #C44343',
                borderRadius: '8px'
              }}
            />}
        /> */}

        <input
          className={classes.searchBar}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="search-icon" />

        {filteredData.length !== 0 &&
          <div className="data-result">
            {filteredData.map((product, key) => {
              return (
                <Link
                  className="suggestion-link"
                  to={'/products/' + product._id}
                >
                  <p>
                    {product.title}
                  </p>
                </Link>
              );
            })}
          </div>}
      </div>
    </div>
  );
};

export default SearchBar;
