import { addOrIncProduct, removeOrDecProduct } from "../utlis";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const newPruduct = {
        id: action.payload.id,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        price: action.payload.price,
      };
      return addOrIncProduct(state, newPruduct);
    case "REMOVE_PRODUCT":
      const prodToRemoveID = action.payload;
      return removeOrDecProduct(state, prodToRemoveID);
    case "Clear_Cart":
      return [];
    default:
      return state;
  }
};
