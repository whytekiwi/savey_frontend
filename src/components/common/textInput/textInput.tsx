import React from "react";
import "./textInput.sass";

export interface ITextInputProps {
  value: string;
  onValueChanged: (value: string) => void;
}

const TextInput: React.FC<ITextInputProps> = ({ value, onValueChanged }) => {
  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={(event) => onValueChanged(event.target.value)}
    />
  );
};

export default TextInput;
