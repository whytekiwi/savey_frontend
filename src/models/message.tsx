import { ColorUtil } from "../components/common/colorSwatch/color";

export class Message {
  id?: string;
  photoUrl?: string;
  videoUploaded: boolean = false;
  tags: string[] = [];
  color: string = ColorUtil.randomColor();
  name?: string;
}
