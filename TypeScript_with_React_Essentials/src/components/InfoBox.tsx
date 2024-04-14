import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Hint</h2>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
