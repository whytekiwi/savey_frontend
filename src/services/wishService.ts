import { Wish } from "../models/wish";
import { Config } from "../constants";
import { ColorUtil } from "../components/common/colorSwatch/color";

export class WishService {
  private wishPath: string = "wish";
  private downloadPath: string = "download";

  photoKey = "photo";
  videoKey = "video";

  getWish = async (id?: string): Promise<Wish | undefined> => {
    const url = this.getUrl(this.wishPath, id);

    const response = await fetch(url, {
      method: "get",
      headers: {
        accept: "application/json",
      },
    });
    return await this.parseWish(response);
  };

  saveWish = async (wish: Wish): Promise<void> => {
    const url = this.getUrl(this.wishPath);

    await fetch(url, {
      method: "post",
      body: JSON.stringify(wish),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  postFile = async (
    id: string,
    file: File,
    fileType: "photo" | "video"
  ): Promise<Wish | undefined> => {
    const formData = new FormData();
    formData.append(fileType, file);

    const url = this.getUrl(this.wishPath, id, fileType);

    const response = await fetch(url, {
      method: "post",
      body: formData,
    });

    return await this.parseWish(response);
  };

  private parseWish = async (response: Response): Promise<Wish | undefined> => {
    if (!response.ok) {
      return undefined;
    }

    try {
      const json = await response.json();
      if (json) {
        const wish = json as Wish;
        // We must mask the url of the photo to an endpoint on the backend
        // This is because the backend is agnostic to it's absolute url, and returns a relative path
        if (wish.id && wish.photoFileName) {
          wish.photoUrl = this.getFileUrl(wish.id, wish.photoFileName);
        }
        if (wish.id && wish.videoFileName) {
          wish.videoUrl = this.getFileUrl(wish.id, wish.videoFileName);
        }
        // Some values are nullable on the backend, but should be populated client side
        if (!wish.tags) {
          wish.tags = [];
        }
        if (!wish.color) {
          wish.color = ColorUtil.randomColor();
        }
        return wish;
      }
      return undefined;
    } catch {
      return undefined;
    }
  };

  private getFileUrl(id: string, fileName: string): string {
    return this.getUrl(this.wishPath, id, this.downloadPath, fileName);
  }

  private getUrl(...parts: (string | undefined)[]): string {
    return parts.reduce((path, current) => {
      if (!current) return path!;
      return path + "/" + current;
    }, Config.baseUrl)!;
  }
}
