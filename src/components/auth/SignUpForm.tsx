import { Input } from "@black-ui/react";
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
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Username"
        name="username"
        value={newUser.username}
        onChange={handleChange}
      />
      <Input
        placeholder="Email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />
    </form>
  );
};

export default SignUpForm;
