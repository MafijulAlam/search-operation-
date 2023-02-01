import React, { useState } from 'react';
const SearchBox = ({
  filterText,
  inStockOnly,
  setfilterText,
  setInStockOnly,
}) => {
  const handleClick = (e) => {
    setfilterText(e.target.value);
  };

  const handleCheckbox = (e) => {
    setInStockOnly(e.target.checked);
  };

  return (
    <div>
      <h5>Search Items</h5>
      <input
        type="search"
        placeholder="search"
        value={filterText}
        onChange={handleClick}
      />
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={inStockOnly}
          onChange={handleCheckbox}
        />
        <label htmlFor="checkbox">Only show product in stock</label>
      </div>
    </div>
  );
};

export default SearchBox;
