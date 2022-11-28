import React from "react";
import "./fileSelector.sass";

export interface IFileSelectorProps {
  accept?: string;
  onFileSelected: (file: File) => void;
}

const FileSelector: React.FC<IFileSelectorProps> = ({
  accept,
  onFileSelected,
}) => {
  const handleFormEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    onFileSelected(files[0]);
  };

  return (
    <input
      className="text-input"
      type="file"
      accept={accept}
      onChange={handleFormEvent}
    />
  );
};

export default FileSelector;
