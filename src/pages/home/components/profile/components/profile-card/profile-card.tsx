import "./profile-card.css";
import phRoundFlag from "../../../../../../assets/images/icons/ph-flag-round.webp";

import { useState } from "react";
import { Card } from "@fluentui/react-components/unstable";
import { Text, Link } from "@fluentui/react-components";
import classnames from "classnames";

export default function ProfileCard() {
  const [phoneHidden, setPhoneHidden] = useState(true);

  return (
    <div id="profile-card">
      <Card>
        <div className="p-1">
          <div className="mb-4">
            <header className="mb-2">
              <Text weight="medium" size={400}>
                Location
              </Text>
            </header>
            <section className="d-flex align-items-center">
              <img
                className="flag-icon me-2"
                src={phRoundFlag}
                alt="philippines-flag"
              />
              <Text size={400}>
                <span>Cagayan de Oro, Philippines</span>
              </Text>
            </section>
          </div>

          <div className="mb-4">
            <header className="mb-2">
              <Text weight="medium" size={400}>
                GitHub
              </Text>
            </header>
            <section>
              <Link href="https://www.github.com/valmoresron" target="_blank">
                <Text size={400}>
                  <span className="link">github.com/valmoresron</span>
                </Text>
              </Link>
            </section>
          </div>

          <div className="mb-4">
            <header className="mb-2">
              <Text weight="medium" size={400}>
                LinkedIn
              </Text>
            </header>
            <section>
              <Link
                href="https://www.linkedin.com/in/francisvalmores/"
                target="_blank"
              >
                <Text size={400}>
                  <span className="link">linkedin.com/in/francisvalmores</span>
                </Text>
              </Link>
            </section>
          </div>

          <div className={classnames({ "mb-4": !phoneHidden })}>
            <header className="mb-2">
              <Text weight="medium" size={400}>
                Email
              </Text>
            </header>
            <section>
              <Link href="mailto:valmoresron@gmail.com">
                <Text size={400}>
                  <span className="link">valmoresron@gmail.com</span>
                </Text>
              </Link>
            </section>
          </div>

          <div className={classnames({ hidden: phoneHidden })}>
            <header className="mb-2">
              <Text weight="medium" size={400}>
                Phone
              </Text>
            </header>
            <section>
              <address>
                <Text size={400}>
                  <span className="font-weight-normal">+63 926 5679 651</span>
                </Text>
              </address>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
}
