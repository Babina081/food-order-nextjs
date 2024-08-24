"use client";

import { AppStore, makeStore, persistor, store } from "@/lib/store/store";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   storeRef.current = makeStore();
  // }
  // let persistor = persistStore(storeRef.current);
  useEffect(() => {
    if (typeof window !== "undefined") {
      persistStore(store);
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
