import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = itemToAdd => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itemToAdd
})