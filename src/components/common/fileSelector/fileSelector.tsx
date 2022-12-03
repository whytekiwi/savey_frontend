import React, { useRef } from "react";
import Button from "../button/button";
import "./fileSelector.sass";

export interface IFileSelectorProps {
  accept?: string;
  selectedFileName?: string;
  text: string;
  onFileSelected: (file: File) => void;
}

const FileSelector: React.FC<IFileSelectorProps> = ({
  accept,
  selectedFileName,
  text,
  onFileSelected,
}) => {
  const handleFormEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    onFileSelected(files[0]);
  };

  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <div className="file-input">
      <input
        ref={inputElement}
        type="file"
        accept={accept}
        onChange={handleFormEvent}
      />
      <Button onClick={() => inputElement.current?.click()}>{text}</Button>
      {selectedFileName && <span>{selectedFileName}</span>}
    </div>
  );
};

export default FileSelector;
