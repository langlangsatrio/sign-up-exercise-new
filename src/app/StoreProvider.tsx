"use client";

import { AppStore, makeStore } from "@/lib/redux/store";
import * as React from "react";
import { Provider } from "react-redux";

interface IStoreProvider {
  children: React.ReactNode;
}

const StoreProvider: React.FunctionComponent<IStoreProvider> = ({
  children,
}) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
