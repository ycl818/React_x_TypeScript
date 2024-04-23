import Button from "../Button";

type SessionListItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

const SessionListItem = ({
  id,
  title,
  summary,
  image,
}: SessionListItemProps) => {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
};

export default SessionListItem;
