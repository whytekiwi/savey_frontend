import React, { useEffect, useState } from "react";
import "./textInput.sass";

export interface ITextInputProps {
  value?: string;
  placeholder: string;
  onValueChanged: (value: string) => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  value,
  placeholder,
  onValueChanged,
}) => {
  const [innerValue, setValue] = useState<string>(value ?? "");

  useEffect(() => {
    onValueChanged(innerValue);
  }, [innerValue, onValueChanged]);

  return (
    <input
      className="text-input"
      type="text"
      placeholder={placeholder}
      value={innerValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default TextInput;
