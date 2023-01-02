import "./profile-name.css";

import { Text } from "@fluentui/react-components";

export default function ProfileName() {
  return (
    <div id="profile-name">
      <Text block weight="medium" size={600}>
        Francis Valmores
      </Text>
      <Text>
        <span className="text-muted">Web Developer</span>
      </Text>
    </div>
  );
}
