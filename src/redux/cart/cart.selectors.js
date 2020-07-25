import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectBikeItems = createSelector(
    [selectCart],
    cart => cart.bikeItems
)

export const selectApparelItems = createSelector(
    [selectCart],
    cart => cart.apparelItems
)

export const selectCartTotal = createSelector(
    [selectBikeItems, selectApparelItems],
    (bikeItems, apparelItems) => (bikeItems.reduce(
        (accumalatedQuantity, bikeItem) =>
            accumalatedQuantity + bikeItem.quantity * bikeItem.price,
        0
    ) + apparelItems.reduce((accumalatedQuantity, item) =>
        accumalatedQuantity + item.quantity * item.price,
        0)).toFixed(2)
)

export const selectCartLength = createSelector(
    [selectBikeItems, selectApparelItems],
    (bikeItems, apparelItems) => bikeItems.length + apparelItems.length
)