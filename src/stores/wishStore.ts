import { makeAutoObservable } from "mobx";
import { Wish } from "../models/wish";

class WishStore {
  wish?: Wish;

  constructor() {
    makeAutoObservable(this);

    this.wish = new Wish();
    this.wish.id = "dj test id";
  }
}

export default WishStore;
