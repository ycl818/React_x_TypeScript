import { type ReactNode } from "react";

type HintProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintProps | WarningProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Hint</h2>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
