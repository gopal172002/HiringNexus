import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    wishlist: localStorage.getItem("wishlistItems")
        ? JSON.parse(localStorage.getItem("wishlistItems"))
        : [],
};

export const wishlistReducer = createReducer(initialState, (builder) => {
    builder
        // Add to wishlist
        .addCase('addToWishlist', (state, action) => {
            const item = action.payload;
            const isItemExist = state.wishlist.find((i) => i.id === item.id);
            if (isItemExist) {
                state.wishlist = state.wishlist.map((i) =>
                    i.id === isItemExist.id ? item : i
                );
            } else {
                state.wishlist = [...state.wishlist, item];
            }
        })

        // Remove from wishlist
        .addCase('removeFromWishlist', (state, action) => {
            state.wishlist = state.wishlist.filter((i) => i.id !== action.payload);
        });
});
