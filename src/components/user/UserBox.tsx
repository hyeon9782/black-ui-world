import { Avatar } from "@black-ui/react";
import { Profile } from "../../types/profile";
type Props = {
  profile: Profile;
  createdAt: string;
};
const UserBox = ({ profile, createdAt }: Props) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Avatar src={profile.image} size="xs" />
      <div>
        <span>{profile.username}</span>
        <br />
        <span>{formmatDate(createdAt)}</span>
      </div>
    </div>
  );
};

function formmatDate(dataStr: string) {
  return dataStr.slice(0, 10);
}

export default UserBox;
