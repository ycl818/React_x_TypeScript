import React, { FormEvent, useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import { Session, useSessionsContext } from "../../store/session-context";
import Input from "../Input";
import Button from "../Button";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

const BookSession = ({ session, onDone }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);

  const sessionCtx = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    // would normally be sent to a server, together with session data
    console.log("🚀 ~ handleSubmit ~ data:", data);
    console.log("sumiittt");

    sessionCtx.bookSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
