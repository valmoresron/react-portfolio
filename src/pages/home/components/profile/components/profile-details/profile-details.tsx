import "./profile-details.css";

import { useState } from "react";
import { Divider, Text, Button } from "@fluentui/react-components";

const experienceParagraphs: string[] = [
  "I specialize in Frontend Development, implementing UI/UX designs for the web.",
];
const aboutMeParagraphs: string[] = [
  "I'm a Web Developer based in the Philippines. I've been in the industry for more than 4 years and I'm always striving to grow and learn something new.",
];

export default function ProfileDetails() {
  const [seeMoreActive, setSeeMoreActive] = useState(false);

  const onReadMoreClick = () => {
    setSeeMoreActive(!seeMoreActive);
  };

  return (
    <div id="profile-details">
      <header className="mb-2">
        <Text weight="medium" size={500}>
          Experience
        </Text>
      </header>
      <section>
        {experienceParagraphs.map((paragraph, i) => (
          <Text key={i} block className="mb-2" align="justify">
            <span className="text-muted">{paragraph}</span>
          </Text>
        ))}
      </section>

      <div className="my-3">
        <Divider />
      </div>

      <header className="mb-2">
        <Text weight="medium" size={400}>
          About me
        </Text>
      </header>
      <section>
        {aboutMeParagraphs
          .slice(0, seeMoreActive ? aboutMeParagraphs.length : 1)
          .map((paragraph, i) => (
            <Text key={i} block className="mb-2" align="justify">
              <span className="text-muted">{paragraph}</span>
            </Text>
          ))}
      </section>
      {aboutMeParagraphs.length > 1 ? (
        <div>
          <Button
            onClick={onReadMoreClick}
            appearance="transparent"
            className="btn-readmore"
          >
            <Text size={200} weight="semibold">
              <span>{seeMoreActive ? "Read less" : "Read more"}</span>
            </Text>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
