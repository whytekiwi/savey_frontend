import React, { useRef, useState } from "react";
import Button from "../button/button";
import { ReactComponent as UploadIcon } from "../../../assets/img/upload.svg";
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

  const [isHovering, setIsHovering] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <div className="file-input">
      <input
        ref={inputElement}
        type="file"
        accept={accept}
        onChange={handleFormEvent}
      />
      <Button
        onHoverEvent={(isHovering) => setIsHovering(isHovering)}
        onClick={() => inputElement.current?.click()}
      >
        <>
          <UploadIcon />
          {isHovering && text}
        </>
      </Button>
    </div>
  );
};

export default FileSelector;
