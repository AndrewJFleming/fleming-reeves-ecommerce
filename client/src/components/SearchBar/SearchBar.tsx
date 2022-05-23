import React, { useState } from "react";
import "./SearchBar.css";
import { ProductData } from "../../interfaces";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

type Props = {
  data: ProductData[];
  placeholder: string;
};

const useStyles = makeStyles((theme: any) => {
  return {
    searchBar: {
      paddingLeft: 10,
      borderRadius: 3,
      border: `1px solid ${theme.palette.error.light}`,
      height: "42px",
      width: "220px",
    },
  };
});

const SearchBar = ({ data, placeholder }: Props) => {
  const classes = useStyles();

  const [filteredData, setFilteredData] = useState<ProductData[]>([]);

  const handleFilter = (event: React.FormEvent<HTMLInputElement>) => {
    const searchWord: string = event.currentTarget.value;
    const newFilter = data.filter((value) => {
      let title = value.title.toLowerCase();
      let search = searchWord.toLowerCase();
      return title.includes(search);
    });

    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
    console.log(newFilter);
  };

  return (
    <div className="search-bar">
      <div className="searchInputs">
        <input
          className={classes.searchBar}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="search-icon" />

        {filteredData.length !== 0 && (
          <div className="data-result">
            {filteredData.map((product, key) => {
              return (
                <Link
                  className="suggestion-link"
                  to={"/products/" + product._id}
                >
                  <p>{product.title}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
