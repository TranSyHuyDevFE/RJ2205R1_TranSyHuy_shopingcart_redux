import { combineReducers } from "redux";
import cartReducer from "./reducers/index";
const rootReducer = combineReducers({
  cart: cartReducer,
});
export default rootReducer;
