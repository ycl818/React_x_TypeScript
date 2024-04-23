import React from "react";
import { Session } from "../../store/session-context";
import Button from "../Button";

type UpCommingSessionProps = {
  session: Session;
  onCancel: () => void;
};

const UpCommingSession = ({ session, onCancel }: UpCommingSessionProps) => {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <p>{session.description}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="actions">
        <Button onClick={onCancel}>Cancel</Button>
      </p>
    </article>
  );
};

export default UpCommingSession;
