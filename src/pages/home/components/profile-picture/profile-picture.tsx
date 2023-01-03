import "./profile-picture.css";
import myProfilePic from "../../../../assets/images/me.jpg";

export default function ProfilePicture() {
  return (
    <div id="profile-picture">
      <img src={myProfilePic} alt="my-profile-picture" />
    </div>
  );
}
