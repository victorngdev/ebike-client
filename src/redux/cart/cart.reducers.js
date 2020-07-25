import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    bikeItems: [],
    apparelItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_BIKE_ITEM:
            return {
                ...state,
                bikeItems: addItemToCart(state.bikeItems, action.payload)
            }
        case CartActionTypes.REMOVE_BIKE_ITEM:
            return {
                ...state,
                bikeItems: removeItemFromCart(state.bikeItems, action.payload)
            }
        case CartActionTypes.CLEAR_BIKE_ITEM_FROM_CART:
            return {
                ...state,
                bikeItems: state.bikeItems.filter(
                    cartItem => cartItem.id !== action.payload
                )
            }
        case CartActionTypes.ADD_APPAREL_ITEM:
            return {
                ...state,
                apparelItems: addItemToCart(state.apparelItems, action.payload)
            }
        case CartActionTypes.REMOVE_APPAREL_ITEM:
            return {
                ...state,
                apparelItems: removeItemFromCart(state.apparelItems, action.payload)
            }
        case CartActionTypes.CLEAR_APPAREL_ITEM_FROM_CART:
            return {
                ...state,
                apparelItems: state.apparelItems.filter(
                    cartItem => cartItem.id !== action.payload
                )
            }
        case CartActionTypes.CHECKOUT:
            return {
                ...state,
                bikeItems: [],
                apparelItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;