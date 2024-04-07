import React, { useContext } from "react";
import Product from "./Product";
import { generalContext } from "../contexts/GeneralContext";

const ProductGroup = () => {
  const {products}=useContext(generalContext)
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
