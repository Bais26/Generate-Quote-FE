import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import quoteReducer from "../components/quoteSlice";
import authReducer from "../components/authSlice";

const persistConfig = {
  key: "root",// Key untuk menyimpan state kie sing gawe ndase lara
  storage,              
  whitelist: ["auth"], 
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store); 


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
