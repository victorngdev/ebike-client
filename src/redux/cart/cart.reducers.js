import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    bikeItems: [],
    apparelItems: [],
    orders: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.INIT_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case CartActionTypes.ADD_BIKE_ITEM:
            return {
                ...state,
                bikeItems: addItemToCart(state.bikeItems, action.payload.item)
            }
        case CartActionTypes.REMOVE_BIKE_ITEM:
            return {
                ...state,
                bikeItems: removeItemFromCart(state.bikeItems, action.payload.itemId)
            }
        case CartActionTypes.CLEAR_BIKE_ITEM_FROM_CART:
            return {
                ...state,
                bikeItems: state.bikeItems.filter(
                    cartItem => cartItem.id !== action.payload.itemId
                )
            }
        case CartActionTypes.ADD_APPAREL_ITEM:
            return {
                ...state,
                apparelItems: addItemToCart(state.apparelItems, action.payload.item)
            }
        case CartActionTypes.REMOVE_APPAREL_ITEM:
            return {
                ...state,
                apparelItems: removeItemFromCart(state.apparelItems, action.payload.itemId)
            }
        case CartActionTypes.CLEAR_APPAREL_ITEM_FROM_CART:
            return {
                ...state,
                apparelItems: state.apparelItems.filter(
                    cartItem => cartItem.id !== action.payload.itemId
                )
            }
        case CartActionTypes.ADD_APPAREL_ORDER_ITEM: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            const apparels = addItemToCart(order.apparels, action.payload.item);
            return {
                ...state,
                orders: state.orders.map(o => o.id === order.id ? { ...order, apparels } : o)
            }
        }
        case CartActionTypes.REMOVE_APPAREL_ORDER_ITEM: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            const apparels = removeItemFromCart(order.apparels, action.payload.itemId);
            return {
                ...state,
                orders: state.orders.map(o => o.id === order.id ? { ...order, apparels } : o)
            }
        }
        case CartActionTypes.CLEAR_APPAREL_ORDER_ITEM_FROM_CART: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            return {
                ...state,
                orders: state.orders.map(o => o.id === action.payload.orderId ? { ...order, apparels: order.apparels.filter(apparel => apparel.id !== action.payload.itemId) } : o)
            }
        }
        case CartActionTypes.ADD_BIKE_ORDER_ITEM: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            const bikes = addItemToCart(order.bikes, action.payload.item);
            return {
                ...state,
                orders: state.orders.map(o => o.id === order.id ? { ...order, bikes } : o)
            }
        }
        case CartActionTypes.REMOVE_BIKE_ORDER_ITEM: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            const bikes = removeItemFromCart(order.bikes, action.payload.itemId);
            return {
                ...state,
                orders: state.orders.map(o => o.id === order.id ? { ...order, bikes } : o)
            }
        }
        case CartActionTypes.CLEAR_BIKE_ORDER_ITEM_FROM_CART: {
            const order = state.orders.find(order => order.id === action.payload.orderId);
            return {
                ...state,
                orders: state.orders.map(o => o.id === action.payload.orderId ? { ...order, bikes: order.bikes.filter(bike => bike.id !== action.payload.itemId) } : o)
            }
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