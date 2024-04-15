import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  return (
    <main>
      <Input label="Your Name" id="name" type="string" />
      <Input label="Your Age" id="age" type="number" />

      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://reactjs.org">A link</Button>
      </p>
    </main>
  );
}

export default App;
