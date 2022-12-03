import classNames from "classnames";
import React, { useState } from "react";
import { TagUtil } from "./tag";
import "./tagSelector.sass";

export interface ITagSelectorProps {
  selectedTags: string[];
  onTagToggled: (tag: string) => void;
}

const TagSelector: React.FC<ITagSelectorProps> = ({
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
    <div className="tag-selector" onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={classNames("container", {
          expanded: isExpanded,
        })}
      >
        {selectedTags.length > 0 ? (
          selectedTags.map((tag) => formatSelectedTag(tag))
        ) : (
          <span className="placeholder">Select some tags...</span>
        )}
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
    </div>
  );
};

export default TagSelector;
