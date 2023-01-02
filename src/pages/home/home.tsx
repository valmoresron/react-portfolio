import "./home.css";

import TopCover from "./components/top-cover/top-cover";
import ProfilePicture from "./components/profile-picture/profile-picture";
import ProfileName from "./components/profile-name/profile-name";

export default function Home() {
  return (
    <div id="home">
      <div className="top-cover">
        <TopCover />
      </div>
      <div className="body">
        <div className="d-flex justify-content-center mb-3">
          <ProfilePicture />
        </div>
        <div className="d-flex justify-content-center">
          <ProfileName />
        </div>
      </div>
    </div>
  );
}
