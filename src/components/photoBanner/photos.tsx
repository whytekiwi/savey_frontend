import React from "react";

export class Photos {
  private static getPhotoUrl = (path: string): string =>
    process.env.PUBLIC_URL + path;

  static photo1 = (
    <img
      src={this.getPhotoUrl("/LibbyPhotos/20220104_122401.jpg")}
      alt="Libby feeding a tall horse"
      key="20220104_122401"
    />
  );
}
