import CatalogActionTypes from "./catalog.types";
import api from "../../apis/api";

export const getHoverItem = item => ({
    type: CatalogActionTypes.GET_HOVER_ITEM,
    payload: item
})

export const fetchBikes = () => async dispatch => {
    const response = await api.get("/bikes");
    dispatch({
        type: CatalogActionTypes.FETCH_BIKES,
        payload: {
            collections: response.data,
            initItem: response.data[0]
        }
    })
}

export const fetchBikeDetails = bikeTitle => async dispatch => {
    const response = await api.get(`/bikes/${bikeTitle}`);
    dispatch({
        type: CatalogActionTypes.FETCH_BIKE_DETAILS,
        payload: response.data
    })
}