import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../components/quoteSlice";

// Mengonfigurasi store Redux
export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});

// Menyediakan tipe RootState dan AppDispatch untuk akses ke store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
