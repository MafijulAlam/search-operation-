import React, { useState } from 'react';
import ProductArea from './components/productArea/ProductArea';
import SearchBox from './components/searchBox/SearchBox';
import productItems from './api/api';

const App = () => {
  const [filterText, setfilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div style={{ padding: '3rem' }}>
      <h1>Product</h1>
      <SearchBox
        filterText={filterText}
        inStockOnly={inStockOnly}
        setfilterText={setfilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductArea
        products={productItems}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default App;
