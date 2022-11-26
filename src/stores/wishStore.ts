import { makeObservable, observable, runInAction } from "mobx";
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

  loadWish = async (id?: string) => {
    const wish = await this.wishService.getWish(id);

    runInAction(() => {
      this.wish = wish;
    });
  };
}

export default WishStore;
