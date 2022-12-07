import React, { useState } from "react";
import Button from "../common/button/button";
import TextInput from "../common/textInput/textInput";
import Modal from "../modal/modal";
import "./openWishModal.sass"

export interface IOpenWishModalProps {
  isOpen: boolean;
  toggle: () => void;
  loadWish: (id: string) => void;
}

const OpenWishModal: React.FC<IOpenWishModalProps> = ({
  isOpen,
  toggle,
  loadWish,
}) => {
  const [id, setId] = useState("");

  return (
    <Modal open={isOpen} toggle={toggle}>
      <div className="open-wish-modal">
        <span>Pick up where your left off:</span>
        <TextInput
          placeholder={"Enter your unique code"}
          value={id}
          onValueChanged={setId}
        />
        <Button onClick={() => loadWish(id)}>Load wish</Button>
      </div>
    </Modal>
  );
};

export default OpenWishModal;
