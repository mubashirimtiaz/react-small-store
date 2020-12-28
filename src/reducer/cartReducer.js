export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
        },
      ];
    case "REMOVE_PRODUCT":
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};
