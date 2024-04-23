import SessionListItem from "./SessionListItem";

type SessionListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

const SessionList = ({ sessions }: SessionListProps) => {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => {
        return (
          <li key={session.id}>
            <SessionListItem {...session} />
          </li>
        );
      })}
    </ul>
  );
};

export default SessionList;
