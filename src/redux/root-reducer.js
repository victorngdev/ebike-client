import { combineReducers } from "redux";

import catalogReducer from "./catalog/catalog.reducers";
import userReducer from "./user/user.reducers";

export default combineReducers({
    catalog: catalogReducer,
    user: userReducer
})