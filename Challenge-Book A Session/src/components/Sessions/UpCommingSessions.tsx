import React, { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import Button from "../Button";

type UpCommingSessionsProps = {
  onClose: () => void;
};

const UpCommingSessions = ({ onClose }: UpCommingSessionsProps) => {
  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal} onClose={onClose}>
      UpCommingSessions
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpCommingSessions;
