import "./profile-details.css";

import { useState } from "react";
import { Divider, Text, Button } from "@fluentui/react-components";

const experienceParagraphs: string[] = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel solutaexpedita cupiditate molestiae quisquam optio doloremque molestias",
];
const aboutMeParagraphs: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, tincidunt non facilisis pulvinar, interdum quis enim. Nunc ex erat, lacinia a mattis a, tempus a felis.",
  "Phasellus suscipit porta egestas. Ut facilisis vestibulum imperdiet. Mauris quis ex elit. Mauris et maximus mauris. Suspendisse orci tortor, porttitor eget mauris quis, tempus suscipit libero. Aenean aliquam varius lobortis. Etiam imperdiet hendrerit risus in mattis.",
  "Curabitur ultricies tortor odio, non semper enim porttitor at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed malesuada, purus ut tristique commodo, dolor lorem mollis enim, sit amet volutpat lorem libero et orci. Quisque bibendum velit eu dui placerat vulputate. Cras sit amet risus ultrices, efficitur lectus at, viverra sapien. Cras ullamcorper metus vitae turpis feugiat faucibus vel et odio. Aenean vitae enim id est euismod congue. Duis tristique nibh a porta commodo. Nullam sapien leo, gravida a mattis consectetur, ultricies vel augue. Integer id mi in velit eleifend sagittis vel nec neque. Morbi sed orci semper, iaculis dui nec, imperdiet eros. Nam feugiat odio vitae est accumsan, eget condimentum dui ullamcorper. Aenean vel lorem sit amet metus tincidunt facilisis.",
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