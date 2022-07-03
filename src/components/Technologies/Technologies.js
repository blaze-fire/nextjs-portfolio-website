import React from 'react';
import { DiPython, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiCplusplus, SiJupyter, SiSpyderide, SiFlask, SiHeroku, SiJavascript, SiNodedotjs } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <SiCplusplus size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Competitive Programming
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            For Machine Learning <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJupyter size="3rem" />
          <SiSpyderide size="3rem" />
          <SiFlask size="3rem" />
          <SiHeroku size="3rem" />
          <DiPython size="3rem" />

        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Projects in the areas of NLP, <br />
            Image Classification, Market Segmentation, Explainable AI
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <SiJavascript size="3rem" />
          <SiNodedotjs size="3rem" />

        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Experience with html, css<br />
            and JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
