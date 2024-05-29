import { Input } from "@black-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
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
        placeholder="아이디를 입력해주세요."
        name="email"
        value={loginUser.email}
        onChange={handleChange}
      />
      <Input
        placeholder="비밀번호를 입력해주세요."
        name="password"
        value={loginUser.password}
        onChange={handleChange}
      />
    </form>
  );
};

export default LoginForm;
