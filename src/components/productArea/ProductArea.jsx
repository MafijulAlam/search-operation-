import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan={'2'}>{category}</th>
    </tr>
  );
};
const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductArea = ({ products, inStockOnly, filterText }) => {
  const rows = [];
  let lastCategory = null;

  products?.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;

    if (inStockOnly & !product.stocked) return;

    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    rows.push(<ProductRow product={product} />);
  });

  return (
    <div>
      <h1>Product Area</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductArea;
