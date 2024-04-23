import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

type ModalHandle = {
  open: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, onClose }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          if (dialog.current) {
            dialog.current.showModal();
          }
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} onClose={onClose} className="modal">
        {children}
      </dialog>,
      document.getElementById("modal-root")!
    );
  }
);

export default Modal;
