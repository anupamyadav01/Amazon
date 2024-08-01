const getTodaysDeal = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/deals-v2?country=US&min_product_star_rating=ALL&price_range=ALL&discount_range=ALL";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const getProductBySearch = async (query) => {
  const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const getProductDetails = async (asin) => {
  const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const getSellProducts = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/product-offers?asin=B09SM24S8C&country=US&limit=100&page=1";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bff9801c5emsh3c27ebccd0dd335p13e6a4jsn912522142576",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export {
  getProductBySearch,
  getSellProducts,
  getProductDetails,
  getTodaysDeal,
};
