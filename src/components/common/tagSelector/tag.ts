export enum Tag {
  Funny = "Funny",
  Happy = "Happy",
  Memory = "Memory",
  Story = "Story",
  Heartfelt = "Heartfelt",
  Song = "Song",
}

export class TagUtil {
  /**
   * A list of all colors
   */
  static allTags: string[] = Object.values(Tag);
}
