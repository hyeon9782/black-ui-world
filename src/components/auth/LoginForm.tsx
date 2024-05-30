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
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        name="email"
        value={loginUser.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        name="password"
        value={loginUser.password}
        onChange={handleChange}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
