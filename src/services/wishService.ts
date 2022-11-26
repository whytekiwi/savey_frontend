import { Wish } from "../models/wish";
import { Config } from "../constants";

export class WishService {
  private wishPath: string = "wish";

  getWish = async (id?: string): Promise<Wish | undefined> => {
    const response = await this.request(this.wishPath, id);

    if (!response.ok) {
      throw new Error("Could not load data");
    }

    try {
      const json = await response.json();
      if (json) {
        return json as Wish;
      }
      return undefined;
    } catch {
      return undefined;
    }
  };

  private request(
    path: string,
    id?: string,
    method: string = "get"
  ): Promise<Response> {
    const url = this.getUrl(path, id);

    return fetch(url, {
      method,
      headers: {
        accept: "application/json",
      },
    });
  }

  private getUrl(...parts: (string | undefined)[]): string {
    return parts.reduce((path, current) => {
      if (!current) return path!;
      return path + "/" + current;
    }, Config.baseUrl)!;
  }
}
