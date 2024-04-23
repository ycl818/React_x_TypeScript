import React, { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import Button from "../Button";
import { useSessionsContext } from "../../store/session-context";
import UpCommingSession from "./UpCommingSession";

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

  const sessionsCtx = useSessionsContext();
  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  function handleCancelSession(sessionId: string) {
    sessionsCtx.cancelSession(sessionId);
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpCommingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions found.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpCommingSessions;
