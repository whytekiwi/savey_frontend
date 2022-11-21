import React from "react";
import { WishService } from "../services/wishService";
import UiStore from "./uiStore";
import WishStore from "./wishStore";

class RootStore {
  wishService: WishService;

  uiStore: UiStore;
  wishStore: WishStore;

  constructor() {
    this.wishService = new WishService();

    this.uiStore = new UiStore();
    this.wishStore = new WishStore(this.wishService);
  }
}

const StoreContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoreContext);
