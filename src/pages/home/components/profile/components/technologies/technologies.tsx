import "./technologies.css";
import logos from "./technology-logos";

import { Text } from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  CardPreview,
} from "@fluentui/react-components/unstable";
import { WebTechnology } from "../../../../../../models/web-technology.model";

const technologies: WebTechnology[] = [
  {
    name: "React",
    logoUrl: logos.reactLogo,
  },
  {
    name: "Angular",
    logoUrl: logos.angularLogo,
  },
  {
    name: "Vue.js",
    logoUrl: logos.vuejsLogo,
  },
  {
    name: "TypeScript",
    logoUrl: logos.typescriptLogo,
  },
  {
    name: "Docker",
    logoUrl: logos.dockerLogo,
  },
  {
    name: "Python",
    logoUrl: logos.pythonLogo,
  },
  {
    name: "Django",
    logoUrl: logos.djangoLogo,
  },
  {
    name: "HTML 5",
    logoUrl: logos.htmlLogo,
  },
  {
    name: "JavaScript",
    logoUrl: logos.javascriptLogo,
  },
  {
    name: "NodeJS",
    logoUrl: logos.nodejsLogo,
  },
  {
    name: "Bootstrap",
    logoUrl: logos.bootstrapLogo,
  },
];

export default function Technologies() {
  return (
    <div id="technologies">
      <header className="mb-3">
        <Text weight="medium" size={400}>
          Technologies used
        </Text>
      </header>
      <section>
        <div className="row g-4">
          {technologies.map((tech, i) => (
            <div className="col-3" key={i}>
              <Card>
                <CardPreview>
                  <div className="d-flex align-items-center justify-content-center py-2 bg-light preview-logo-container">
                    <img
                      src={tech.logoUrl}
                      alt="web-technology-logo"
                      className="preview-logo"
                    />
                  </div>
                </CardPreview>
                <CardFooter>
                  <div className="text-center w-100">
                    <Text weight="semibold">{tech.name}</Text>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
