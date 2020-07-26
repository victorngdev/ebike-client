export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemId) => {
    const existingItem = cartItems.find(cartItem =>
        cartItem.id === itemId
    )

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemId);
    }

    return cartItems.map(
        cartItem => cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}