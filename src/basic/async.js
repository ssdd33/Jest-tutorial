function fetchProduct(error) {
  if (error === "error") {
    return Promise.reject("network error");
  }
  return Promise.resolve({ item: "milk", price: 2000 });
}

module.exports = fetchProduct;
