import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterUser: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        async () => {
          await fetch("http://localhost:8000/api/users", {
            method: "POST",
            body: JSON.stringify({
              email,
              name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        };
        navigate("/my-page");
      }}
    >
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        data-test="emailInput"
      />
      <input
        type="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        data-test="nameInput"
      />
      <button type="submit" data-test="submitButton">
        Submit
      </button>
    </form>
  );
};
