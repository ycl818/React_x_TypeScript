import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0)
    return <InfoBox mode="hint">You have no course goal yet.</InfoBox>;

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">You have too many goals. Delete some.</InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.desctiption}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
