import classNames from "classnames";
import React, { useState } from "react";
import { TagUtil } from "./tag";
import "./tagSelector.sass";

export interface ITagSelectorProps {
  selectedTags: string[];
  onTagToggled: (tag: string) => void;
}

const ColorPicker: React.FC<ITagSelectorProps> = ({
  selectedTags,
  onTagToggled,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatSelectedTag = (tag: string): JSX.Element => {
    return (
      <span className="display-tag" key={tag}>
        {tag}
      </span>
    );
  };

  return (
    <div
      className={classNames("tag-selector", {
        expanded: isExpanded,
      })}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="selected-tags">
        {selectedTags.length > 0 ? selectedTags.map((tag) => formatSelectedTag(tag)) : <span className="placeholder">Select some tags...</span>}
      </div>
      {isExpanded && (
        <div className="dropdown-content">
          {TagUtil.allTags.map((tag) => (
            <div
              className={classNames("color-value", {
                selected: selectedTags.includes(tag),
              })}
              key={tag}
              onClick={() => {
                onTagToggled(tag);
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
