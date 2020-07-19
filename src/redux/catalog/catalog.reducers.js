import CatalogActionTypes from "./catalog.types";

const INITIAL_STATE = {
    collections: [],
    selectedItem: null
}

const catalogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CatalogActionTypes.GET_HOVER_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }
        case CatalogActionTypes.FETCH_BIKES:
            return {
                ...state,
                collections: action.payload.collections,
                selectedItem: action.payload.initItem
            }
        case CatalogActionTypes.INIT_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: state.collections[0]
            }
        default:
            return state;
    }
}

export default catalogReducer;