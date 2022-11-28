import { Wish } from "../models/wish";
import { Config } from "../constants";

export class WishService {
  private wishPath: string = "wish";
  private photoPath: string = "photo";

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

  postFile = async (
    id: string,
    key: string,
    file: File
  ): Promise<Wish | undefined> => {
    const formData = new FormData();
    formData.append(key, file);

    const url = this.getUrl(this.wishPath, id, this.photoPath);

    const response = await fetch(url, {
      method: "post",
      body: formData,
    });

    return await this.parseWish(response);
  };

  private parseWish = async (response: Response): Promise<Wish | undefined> => {
    if (!response.ok) {
      throw new Error("Could not load data");
    }

    try {
      const json = await response.json();
      if (json) {
        const wish = json as Wish;
        return wish;
      }
      return undefined;
    } catch {
      return undefined;
    }
  };

  private getUrl(...parts: (string | undefined)[]): string {
    return parts.reduce((path, current) => {
      if (!current) return path!;
      return path + "/" + current;
    }, Config.baseUrl)!;
  }
}
