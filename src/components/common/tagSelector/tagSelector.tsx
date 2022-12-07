import classNames from "classnames";
import React, { useRef, useState } from "react";
import useOutsideAlerter from "../../../utilities/outsideAlerter";
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
  const elementRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(elementRef, () => {
    setIsExpanded(false);
  });

  const formatSelectedTag = (tag: string): JSX.Element => {
    return (
      <span className="display-tag" key={tag}>
        {tag}
      </span>
    );
  };

  return (
    <div
      ref={elementRef}
      className="tag-selector"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className={classNames("container", {
          expanded: isExpanded,
        })}
      >
        <div className="selected-tags">
          {selectedTags.length > 0 ? (
            selectedTags.map((tag) => formatSelectedTag(tag))
          ) : (
            <span className="placeholder">Select some tags...</span>
          )}
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
    </div>
  );
};

export default TagSelector;
