import { useRef } from "react";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Input from "./Components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="Your Name" id="name" type="string" ref={input} />
      <Input label="Your Age" id="age" type="number" />

      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://reactjs.org">A link</Button>
      </p>

      <Container as={Button} onClick={() => {}} type="button">
        Click Me
      </Container>
      {/* <Container as="div" /> */}
    </main>
  );
}

export default App;
