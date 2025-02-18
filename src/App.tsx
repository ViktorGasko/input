import { useState, useRef } from "react";
import "./App.scss";
import Input from "./components/input";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [valid, setValid] = useState<"success" | "danger" | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      if (inputRef.current.value.length < 6) {
        inputRef.current.setAttribute("aria-invalid", "true");
        setErrorMessage("Enter a valid password.");
        setValid("danger");
      } else {
        inputRef.current.removeAttribute("aria-invalid");
        setErrorMessage("");
        setValid("success");
      }
    }
  };

  return (
    <div>
      <h1>Input examples</h1>
      <Input
        id="input-1"
        label="Password"
        type="password"
        placeholder="min. 6 characters"
        description="Required"
        aria-invalid={valid == "danger"}
        onBlur={validate}
        required
        ref={inputRef}
        state={valid}
        message={errorMessage}
        messageState={valid == "danger" ? "danger" : undefined}
      ></Input>
      <Input
        id="input-2"
        label="Disabled input"
        placeholder="disabled"
        disabled
      ></Input>
      <Input
        id="input-3"
        state="success"
        label="Success state input"
        message={"Additional message"}
      ></Input>
      <Input
        id="input-4"
        state="warning"
        label="Warning state input"
        messageState="warning"
        message={"Warning message"}
      ></Input>
      <Input
        id="input-5"
        state="danger"
        label="Danger state input"
        aria-invalid={true}
        messageState="danger"
        message={"Danger message"}
      ></Input>
    </div>
  );
}

export default App;
