import React from "react";
import { WishService } from "../services/wishService";
import ToastStore from "./toastStore";
import UiStore from "./uiStore";
import WishStore from "./wishStore";

class RootStore {
  wishService: WishService;

  uiStore: UiStore;
  wishStore: WishStore;
  toastStore: ToastStore;

  constructor() {
    this.wishService = new WishService();

    this.uiStore = new UiStore();
    this.wishStore = new WishStore(this.wishService);
    this.toastStore = new ToastStore();
  }
}

const StoreContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoreContext);
