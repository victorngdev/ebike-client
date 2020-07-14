import { combineReducers } from "redux";

import catalogReducer from "./catalog/catalog.reducers";

export default combineReducers({
    catalog: catalogReducer
})