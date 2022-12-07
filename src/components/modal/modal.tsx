import React, { useRef } from "react";
import useOutsideAlerter from "../../utilities/outsideAlerter";
import "./modal.sass";

export interface IModalProps {
  open: boolean;
  children: string | JSX.Element;
  toggle?: () => void;
}

const Modal: React.FC<IModalProps> = ({ open, children, toggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideAlerter(ref, toggle);

  return (
    <>
      {open && (
        <div className="modal-background">
          <div className="modal" ref={ref}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
