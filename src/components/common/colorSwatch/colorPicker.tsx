import classNames from "classnames";
import React, { useState } from "react";
import { Color, ColorUtil } from "./color";
import "./colorPicker.sass";

export interface IColorPickerProps {
  selectedColor: Color;
  onColorSelected: (color: Color) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = ({
  selectedColor,
  onColorSelected,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="color-picker" onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={classNames("container", {
          expanded: isExpanded,
        })}
      >
        <div className="color-value">
          <div className={ColorUtil.getClassName(selectedColor)} />
          {selectedColor}
        </div>
        {isExpanded && (
          <div className="dropdown-content">
            {ColorUtil.allColors.map((color) => (
              <div
                className={classNames("color-value", {
                  selected: color === selectedColor,
                })}
                key={color}
                onClick={() => {
                  onColorSelected(color);
                  setIsExpanded(false);
                }}
              >
                <div className={ColorUtil.getClassName(color)} />
                {color}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
