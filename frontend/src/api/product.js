// const API_URL = ""

export const getProducts = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = async () => {
  try {
    return {
      test: "test",
    };
  } catch (error) {
    console.log(error);
  }
};
