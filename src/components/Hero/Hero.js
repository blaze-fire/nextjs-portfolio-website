import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there!, <br />
          I’m Krishan Singh
        </SectionTitle>
        <SectionText>
          I am an Electrical Engineering student at Delhi Technological
          University.
        </SectionText>
        <Button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1fS0O9zsTThlHhCTgzXd367hgHImbGTeH/view",
              "_blank"
            );
          }}
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
