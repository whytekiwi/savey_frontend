import { makeObservable, observable, runInAction } from "mobx";
import { Wish } from "../models/wish";
import { WishService } from "../services/wishService";

class WishStore {
  private wishService: WishService;

  wish?: Wish;
  isLoading: boolean;
  isUploadingPhoto: boolean;
  isUploadingVideo: boolean;

  constructor(wishService: WishService) {
    makeObservable(this, {
      wish: observable,
      isLoading: observable,
      isUploadingPhoto: observable,
      isUploadingVideo: observable,
    });

    this.wishService = wishService;
    this.isLoading = false;
    this.isUploadingPhoto = false;
    this.isUploadingVideo = false;
  }

  async loadWish(id?: string) {
    runInAction(() => {
      this.isLoading = true;
      this.wish = undefined;
    });

    const wish = await this.wishService.getWish(id);

    runInAction(() => {
      this.isLoading = false;
      this.wish = wish;
    });
  }

  async saveWish(wish: Wish) {
    await this.wishService.saveWish(wish);
  }

  async uploadPhoto(file: File) {
    if (this.wish?.id) {
      runInAction(() => {
        this.wish!.photoUrl = undefined;
        this.isUploadingPhoto = true;
      });

      const wish = await this.wishService.postFile(this.wish.id, file, "photo");

      runInAction(() => {
        if (wish) {
          this.wish = wish;
        }
        this.isUploadingPhoto = false;
      });
    }
  }

  async uploadVideo(file: File) {
    if (this.wish?.id) {
      runInAction(() => {
        this.wish!.videoUrl = undefined;
        this.isUploadingVideo = true;
      });

      const wish = await this.wishService.postFile(this.wish.id, file, "video");

      runInAction(() => {
        if (wish) {
          this.wish = wish;
        }
        this.isUploadingVideo = false;
      });
    }
  }
}

export default WishStore;
