export enum Color {
  frenchViolet = "French Violet",
  mauve = "Mauve",
  mustard = "Mustard",
  honeyYellow = "Honey Yellow",
  cyan = "Cyan",
  royalBlue = "Royal Blue",
  flame = "Flame",
  copper = "Copper",
  turquoise = "Turquoise",
  yellowGreen = "Yellow Green",
}

export class ColorUtil {
  /**
   * A list of all colors
   */
  static allColors: Color[] = Object.values(Color);

  /**
   * Get a random color from all available colors
   * @returns A random color
   */
  static randomColor = (): Color => {
    const randomIndex = Math.floor(Math.random() * this.allColors.length);
    return this.allColors[randomIndex];
  };

  /**
   * Translate a given color into its CSS class name
   * @param color The color to translate
   * @returns The CSS class name
   */
  static getClassName = (color: Color): string =>
    color.toString().replace(" ", "-").toLowerCase();
}
