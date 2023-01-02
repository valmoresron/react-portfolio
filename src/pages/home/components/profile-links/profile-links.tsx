import "./profile-links.css";
import githubLogo from "../../../../assets/images/logos/github-logo.svg";
import linkedInLogo from "../../../../assets/images/logos/linkedin-logo.svg";

import { Button } from "@fluentui/react-components";

export default function ProfileLinks() {
  return (
    <div id="profile-links">
      <div className="d-flex justify-content-center">
        <div className="me-1">
          <Button
            shape="circular"
            size="large"
            icon={<img src={githubLogo} className="logo" alt="github-logo" />}
          ></Button>
        </div>
        <div>
          <Button
            shape="circular"
            size="large"
            icon={<img src={linkedInLogo} className="logo" alt="github-logo" />}
          ></Button>
        </div>
      </div>
    </div>
  );
}
