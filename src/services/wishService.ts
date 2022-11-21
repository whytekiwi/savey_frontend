import { Wish } from "../models/wish";

export class WishService {
  getWish = (id?: string): Wish => {
    const wish = new Wish();
    wish.id = id;
    wish.name = "test name";
    return wish;
  };
}
