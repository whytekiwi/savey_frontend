import {
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { Wish } from "../models/wish";
import { WishService } from "../services/wishService";

class WishStore {
  private wishService: WishService;

  wish?: Wish;

  constructor(wishService: WishService) {
    makeObservable(this, {
      wish: observable,
    });

    this.wishService = wishService;
  }

  loadWish = (id?: string) => {
    const wish = this.wishService.getWish();

    runInAction(() => {
      this.wish = wish;
    });
  };
}

export default WishStore;
