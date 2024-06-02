import { Button, Input } from "@black-ui/react";
import { updateUserAPI } from "../../apis/user";
import { ChangeEvent, FormEvent, useState } from "react";

const SettingForm = () => {
  const [updateUser, setUpdateUser] = useState({
    email: "",
    password: "",
    username: "",
    bio: "",
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateUser((prevUpdateUser) => ({
      ...prevUpdateUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await updateUserAPI(updateUser);
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
        name="email"
        value={updateUser.email}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Password"
        name="password"
        value={updateUser.password}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Username"
        name="username"
        value={updateUser.username}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Bio"
        name="bio"
        value={updateUser.bio}
        onChange={handleChange}
      />
      <Input
        style={{ boxSizing: "border-box" }}
        placeholder="Image"
        name="image"
        value={updateUser.image}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button>Update</Button>
      </div>
    </form>
  );
};

export default SettingForm;
