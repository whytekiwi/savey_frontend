export class Photos {
  private static getPhotoUrl = (path: string): string =>
    process.env.PUBLIC_URL + path;

  static photo1 = this.getPhotoUrl("/LibbyPhotos/20220104_122401.jpg");
}
