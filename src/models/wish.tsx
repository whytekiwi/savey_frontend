import { Color, ColorUtil } from "../components/common/colorSwatch/color";

export class Wish {
  id?: string;
  name?: string;
  tags: string[] = [];
  color: Color = ColorUtil.randomColor();
  photoFileName?: string;
  videoFileName?: string;

  // These are generated on fetch by the client side
  photoUrl?: string;
  videoUrl?: string;
}
