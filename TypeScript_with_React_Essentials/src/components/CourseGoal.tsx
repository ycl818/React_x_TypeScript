import { PropsWithChildren } from "react";

// import { type ReactNode } from "react";
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  console.log("🚀 ~ CourseGoal ~ children:", children);
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
