import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/lib/features/cart.slice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCartConfig = {
  key: "cartStorage",
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer(
  persistCartConfig,
  cartSlice.reducer
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      // cart: persistedCartReducer,
      cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: true,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
