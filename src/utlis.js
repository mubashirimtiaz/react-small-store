export const addOrIncProduct = (prevProducts, newProduct) => {
  const filteredProduct = prevProducts.find(({ id }) => id === newProduct.id);
  if (filteredProduct) {
    const newArr = prevProducts.filter(({ id }) => id !== filteredProduct.id);
    return [...newArr, { ...filteredProduct, qty: filteredProduct.qty + 1 }];
  } else {
    return [...prevProducts, { ...newProduct, qty: 1 }];
  }
};

export const removeOrDecProduct = (prevProducts, productToRemoveID) => {
  const filteredProduct = prevProducts.find(
    ({ id }) => id === productToRemoveID
  );
  if (filteredProduct && filteredProduct.qty > 1) {
    const newArr = prevProducts.filter(({ id }) => id !== filteredProduct.id);
    return [...newArr, { ...filteredProduct, qty: filteredProduct.qty - 1 }];
  } else {
    return prevProducts.filter(({ id }) => id !== productToRemoveID);
  }
};
