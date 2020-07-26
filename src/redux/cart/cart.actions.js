import CartActionTypes from "./cart.types";
import api from "../../apis/api";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const initOrders = uid => async dispatch => {
    const response = await api.get(
        `/invoices/history?uid=${uid}`
    )
    dispatch({
        type: CartActionTypes.INIT_ORDERS,
        payload: response.data
    })
}

export const addItemToCart = (item, isBike, isOrder, orderId) => ({
    type: isBike ? (!isOrder ? CartActionTypes.ADD_BIKE_ITEM : CartActionTypes.ADD_BIKE_ORDER_ITEM) : (!isOrder ? CartActionTypes.ADD_APPAREL_ITEM : CartActionTypes.ADD_APPAREL_ORDER_ITEM),
    payload: ({ item: item, orderId: orderId })
})

export const removeItemFromCart = (itemId, isBike, isOrder, orderId) => ({
    type: isBike ? (!isOrder ? CartActionTypes.REMOVE_BIKE_ITEM : CartActionTypes.REMOVE_BIKE_ORDER_ITEM) : (!isOrder ? CartActionTypes.REMOVE_APPAREL_ITEM : CartActionTypes.REMOVE_APPAREL_ORDER_ITEM),
    payload: ({ itemId, orderId })
})

export const clearItemFromCart = (itemId, isBike, isOrder, orderId) => ({
    type: isBike ? (!isOrder ? CartActionTypes.CLEAR_BIKE_ITEM_FROM_CART : CartActionTypes.CLEAR_BIKE_ORDER_ITEM_FROM_CART) : (!isOrder ? CartActionTypes.CLEAR_APPAREL_ITEM_FROM_CART : CartActionTypes.CLEAR_APPAREL_ORDER_ITEM_FROM_CART),
    payload: ({ itemId, orderId })
})

export const checkout = () => ({
    type: CartActionTypes.CHECKOUT
})

export const clearOrders = () => dispatch => {
    dispatch({ type: CartActionTypes.CLEAR_ORDERS })
}