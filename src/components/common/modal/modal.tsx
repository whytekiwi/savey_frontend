import React, {
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";
import "./modal.sass";

export interface IModalProps {
  open: boolean;
  children: string | JSX.Element;
  toggle: () => void;
}

const Modal: React.FC<IModalProps> = ({ open, children, toggle }) => {
  const closeKeys: string[] = ["escape"];

  const ref = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: any) => {
    const keyboardEvent = event as KeyboardEvent;
    if (open && closeKeys.indexOf(keyboardEvent.key?.toLowerCase()) > -1) {
      toggle();
    }
  };

  const handleClick = (event: any) => {
    const mouseEvent = event as PointerEvent;
    const baseElement = mouseEvent.composedPath()[0];

    if (baseElement === ref.current) {
      toggle();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      {open && (
        <div className="modal-background" ref={ref}>
          <div className="modal">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
