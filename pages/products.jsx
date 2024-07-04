import { useEffect, useState } from "react";
import axiosInstance from "../src/axios/axios.js";
import ProductCard from "../components/ProductCard.jsx";
import Navbar from "../pages/Navbar.jsx"
const Products = () => {
  const [products, setProduct] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getProducts = async () => {
    const res = await axiosInstance.get("/products");
    setProduct(res.data);
    setSearchedProducts(res.data);
  };
  useEffect(() => {
    //call api here
    getProducts();
  }, []);

  useEffect(()=>{
    //apply filtration
    const searchResults = products.filter((product)=>{
      if(product.title.toLowerCase().includes(searchString.toLocaleLowerCase()))
        return true;
      else 
        return false;
  });
  setSearchedProducts(searchResults);
},[searchString]);

  return (
    <div>
      <Navbar />
      <h1 className="flex items-center justify-center text-5xl mt-5 mb-5">Products</h1>
      <div className="flex items-center justify-center mb-5">
        <input 
          type="text" 
          className="border-2 border-[grey] w-[400px] h-[40px] justify-center rounded"
          value={searchString}
          onChange={(e)=>{
            setSearchString(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 bg-[lightgrey]">
        {searchedProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              images={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
