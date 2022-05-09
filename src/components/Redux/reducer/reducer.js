export default function reducer(state = [], action) {
  switch (action.type) {
    case "getdata":
      //   console.log("red", action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
}
