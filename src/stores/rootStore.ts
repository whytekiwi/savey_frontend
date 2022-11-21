import React from "react";
import UiStore from "./uiStore";
import WishStore from "./wishStore";

class RootStore {
  uiStore: UiStore;
  wishStore: WishStore;

  constructor() {
    this.uiStore = new UiStore();
    this.wishStore = new WishStore();
  }
}

const StoreContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoreContext);
