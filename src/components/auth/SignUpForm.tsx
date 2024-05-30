import { Button, Input } from "@black-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { createUser } from "../../apis/user";

const SignUpForm = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevNewUser) => ({
      ...prevNewUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createUser(newUser);
    console.log(response);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "500px",
      }}
    >
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Username"
        name="username"
        value={newUser.username}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button type="submit">Sign up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
