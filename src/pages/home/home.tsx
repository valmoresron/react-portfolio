import "./home.css";

import TopCover from "./components/top-cover/top-cover";
import ProfilePicture from "./components/profile-picture/profile-picture";

export default function Home() {
  return (
    <div id="home">
      <div className="top-cover">
        <TopCover />
        <div className="d-flex justify-content-center">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}
