import * as actionType from "../actions/actionTypes";

const initialState = {
  cartArr: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartArr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return {
          cartArr: [...state.cartArr, action.payload],
        };
      } else {
        let newcart = state.cartArr;
        const objIndex = newcart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
        }
        return { cartArr: [...newcart] };
      }
    case actionType.DELETE_PRODUCT:
      let newcart = state.cartArr;
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);
      newcart.splice(objIndex, 1);
      return { cartArr: [...newcart] };
    default:
      return state;
  }
};
export default cartReducer;
