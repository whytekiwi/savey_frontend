import { ColorUtil } from "../components/common/colorSwatch/color";

export class Wish {
  id?: string;
  name?: string;
  tags: string[] = [];
  color: string = ColorUtil.randomColor();
  photoUrl?: string;
  videoUrl?: string;
}
