import CatalogActionTypes from "./catalog.types";

export const getHoverItem = item => ({
    type: CatalogActionTypes.GET_HOVER_ITEM,
    payload: item
})