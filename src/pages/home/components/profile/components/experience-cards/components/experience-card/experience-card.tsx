import "./experience-card.css";

import { Card } from "@fluentui/react-components/unstable";
import { Button, Text } from "@fluentui/react-components";
import { Experience } from "../../../../../../../../models/experience.model";

const gotoLink = (link: string) => {
  window.open(link, "_blank");
};

export default function ExperienceCard(props: { experience: Experience }) {
  return (
    <div id="experience-card">
      <Card>
        <div className="p-1">
          <div className="d-flex align-items-center mb-2">
            <div className="me-2">
              <Button
                shape="circular"
                onClick={() => gotoLink(props.experience.companyUrl)}
                icon={
                  <img
                    src={props.experience.companyLogoUrl}
                    className="shadow-sm company-logo"
                  />
                }
              />
            </div>
            <div>
              <Text block weight="semibold" size={300}>
                {props.experience.companyName}
              </Text>
              <Text size={200}>
                <span className="text-muted">{props.experience.position}</span>
              </Text>
            </div>
          </div>
          <div>
            <Text weight="semibold" size={200}>
              <span className="text-muted">
                {props.experience.workDuration}
              </span>
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
