import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item, isBike) => ({
    type: isBike ? CartActionTypes.ADD_BIKE_ITEM : CartActionTypes.ADD_APPAREL_ITEM,
    payload: item
})

export const removeItemFromCart = (itemId, isBike) => ({
    type: isBike ? CartActionTypes.REMOVE_BIKE_ITEM : CartActionTypes.REMOVE_APPAREL_ITEM,
    payload: itemId
})

export const clearItemFromCart = (itemId, isBike) => ({
    type: isBike ? CartActionTypes.CLEAR_BIKE_ITEM_FROM_CART : CartActionTypes.CLEAR_APPAREL_ITEM_FROM_CART,
    payload: itemId
})

export const checkout = () => ({
    type: CartActionTypes.CHECKOUT
})