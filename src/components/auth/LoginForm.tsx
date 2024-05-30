import { Button, Input } from "@black-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { login } from "../../apis/user";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(loginUser);
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
        placeholder="Email"
        size="lg"
        name="email"
        value={loginUser.email}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Password"
        size="lg"
        name="password"
        value={loginUser.password}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};

export default LoginForm;
