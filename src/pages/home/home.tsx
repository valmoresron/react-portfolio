import "./home.css";

import TopCover from "./components/top-cover/top-cover";
import ProfilePicture from "./components/profile-picture/profile-picture";
import ProfileName from "./components/profile-name/profile-name";
import ProfileLinks from "./components/profile-links/profile-links";
import ProfileDetails from "./components/profile-details/profile-details";

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
        <div className="d-flex justify-content-center mb-3">
          <ProfileName />
        </div>
        <div className="d-flex justify-content-center">
          <ProfileLinks />
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-7">
              <ProfileDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
