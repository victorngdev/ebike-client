import CATALOG from "./catalog.data";
import CatalogActionTypes from "./catalog.types";

const INITIAL_STATE = {
    collections: CATALOG,
    selectedItem: CATALOG[0]
}

const catalogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CatalogActionTypes.GET_HOVER_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }
        default:
            return state;
    }
}

export default catalogReducer;