import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

export const eventReducer = createReducer(initialState, {
    // Event creation
    eventCreateRequest: (state) => {
        state.isLoading = true;
    },
    eventCreateSuccess: (state, action) => {
        state.isLoading = false;
        state.event = action.payload;
        state.success = true;
    },
    eventCreateFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    // Get all events of a shop
    getAlleventsShopRequest: (state) => {
        state.isLoading = true;
    },
    getAlleventsShopSuccess: (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
    },
    getAlleventsShopFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // Delete event of a shop
    deleteeventRequest: (state) => {
        state.isLoading = true;
    },
    deleteeventSuccess: (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
    },
    deleteeventFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // Get all events
    getAlleventsRequest: (state) => {
        state.isLoading = true;
    },
    getAlleventsSuccess: (state, action) => {
        state.isLoading = false;
        state.allEvents = action.payload;
    },
    getAlleventsFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // Clear errors
    clearErrors: (state) => {
        state.error = null;
    },
});
