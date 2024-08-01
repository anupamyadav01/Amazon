import { useEffect, useState } from "react";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const searchQuery = "New home Products ";
  const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setProducts(result?.data?.products);
        console.log(result?.data?.products);
      } catch (error) {
        console.error(error);
      }
    };

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
