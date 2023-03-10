import "./profile.css";

import ProfilePicture from "./components/profile-picture/profile-picture";
import ProfileName from "./components/profile-name/profile-name";
import ProfileLinks from "./components/profile-links/profile-links";
import ProfileDetails from "./components/profile-details/profile-details";
import ProfileCard from "./components/profile-card/profile-card";
import ExperienceCards from "./components/experience-cards/experience-cards";
import Technologies from "./components/technologies/technologies";
import { Divider } from "@fluentui/react-components";

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
          <div className="col-xs-12 col-md-6 col-lg-7">
            <div className="mb-4">
              <ProfileDetails />
            </div>

            <div>
              <ExperienceCards />
            </div>

            <div className="my-5">
              <Divider />
            </div>

            <div>
              <Technologies />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-5">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
