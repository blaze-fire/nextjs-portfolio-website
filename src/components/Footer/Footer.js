import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, CompanyContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyContainer>
      </CompanyContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:krishans290@gmail.com">
            krishans290@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/krishan-singh07/">
          krishan-singh07
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
