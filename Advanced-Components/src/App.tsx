import { useRef } from "react";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Input from "./Components/Input";
import Form, { type FormHandles } from "./Components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandles>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string }; // value extract from input always in string
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
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

      <Form onSave={handleSave} ref={customForm}>
        <Input label="Your Name" id="name" type="string" ref={input} />
        <Input label="Your Age" id="age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
