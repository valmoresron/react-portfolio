import "./experience-cards.css";
import engagisLogo from "../../../../../../assets/images/logos/engagis-logo.png";
import innovuzeLogo from "../../../../../../assets/images/logos/innovuze-logo.png";

import ExperienceCard from "./components/experience-card/experience-card";
import { Experience } from "../../../../../../models/experience.model";

const experiences: Experience[] = [
  {
    companyName: "Engagis, Inc.",
    companyUrl: "https://engagis.com/",
    companyLogoUrl: engagisLogo,
    position: "Web Developer",
    workDuration: "June 2021 - Present",
  },
  {
    companyName: "Innovuze Solutions, Inc.",
    companyUrl: "https://www.innovuze.com/",
    companyLogoUrl: innovuzeLogo,
    position: "Web Developer",
    workDuration: "Aug 2019 - June 2021",
  },
];

export default function ExperienceCards() {
  return (
    <div id="experience-cards">
      <div className="row">
        <div className="col-5">
          <ExperienceCard experience={experiences[0]} />
        </div>
        <div className="col-5">
          <ExperienceCard experience={experiences[1]} />
        </div>
      </div>
    </div>
  );
}
