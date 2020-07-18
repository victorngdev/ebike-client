import { combineReducers } from "redux";

import catalogReducer from "./catalog/catalog.reducers";
import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";

export default combineReducers({
    catalog: catalogReducer,
    user: userReducer,
    cart: cartReducer
})