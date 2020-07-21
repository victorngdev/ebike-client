import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = itemToAdd => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itemToAdd
})

export const removeItemFromCart = itemId => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemId
})

export const clearItemFromCart = itemId => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: itemId
})

export const checkout = () => ({
    type: CartActionTypes.CHECKOUT
})