import GET_ITEMS from "../actionType";
let items = [];
const itemReducer = (state = items, action) => {
  console.log("red", action.type);
  switch (action.type) {
    case GET_ITEMS:
      //   items = { id: 1, item_name: "Juice - Tomato, 48 Oz", price: 122 };
      items = action.payload;
      return { ...state, items };
    default:
      return state;
  }
};
export default itemReducer;
