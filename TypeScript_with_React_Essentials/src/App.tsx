import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <CourseGoal title="learn react + ts">
        <p> learn react with typescript</p>
      </CourseGoal>
    </main>
  );
}
