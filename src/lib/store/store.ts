import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/product/productSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  favorite: favoriteReducer,
});

export const makeStore = () => {
  if (typeof window === "undefined") {
    // Server-side: no persistence
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    });
  } else {
    // Client-side: with persistence
    const { persistReducer, persistStore } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      storage: storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    });
  }
};

export const store = makeStore();
export const persistor =
  typeof window !== "undefined" ? persistStore(store) : null;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];