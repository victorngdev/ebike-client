import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import catalogReducer from "./catalog/catalog.reducers";
import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";

const persistConfig = {
    key: "cart",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    catalog: catalogReducer,
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);