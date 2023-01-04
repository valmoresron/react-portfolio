import "./profile.css";

import ProfilePicture from "./components/profile-picture/profile-picture";
import ProfileName from "./components/profile-name/profile-name";
import ProfileLinks from "./components/profile-links/profile-links";
import ProfileDetails from "./components/profile-details/profile-details";
import ProfileCard from "./components/profile-card/profile-card";

export default function Profile() {
  return (
    <div id="profile">
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
        <div className="row gx-5">
          <div className="col-7">
            <ProfileDetails />
          </div>
          <div className="col-5">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
