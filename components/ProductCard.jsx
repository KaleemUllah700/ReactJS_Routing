// import React, { useState } from "react";

const ProductCard = ({id,title,price,category,images}) => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <img src={images} className="w-[200px] h-[200px]" />
      <h4>ID: {id}</h4>
      <h4>Title: {title}</h4>
      <h4>Price: {price}</h4>
      <h4>Category: {category}</h4>
    </div>
  );
};

export default ProductCard;
