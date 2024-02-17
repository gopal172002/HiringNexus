import { createReducer, createAction } from "@reduxjs/toolkit";

// Action creators
export const addToCart = createAction("addToCart");
export const removeFromCart = createAction("removeFromCart");

const initialState = {
    cart: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
};

export const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToCart, (state, action) => {
            const item = action.payload;
            const isItemExist = state.cart.find((i) => i.id === item.id);
            if (isItemExist) {
                state.cart = state.cart.map((i) => (i.id === item.id ? item : i));
            } else {
                state.cart.push(item);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        })
        .addCase(removeFromCart, (state, action) => {
            state.cart = state.cart.filter((i) => i.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        });
});
