import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/");
      setProducts(data);
    } catch (error) {
      throw new Error("Something went wrong while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full">
        <Products productsData={products} />
      </div>
    </div>
  );
};

export default Home;
