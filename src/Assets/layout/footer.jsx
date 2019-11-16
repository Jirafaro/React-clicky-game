import React from 'react';
import styled from 'styled-components';
import spacing from '../Components/spacing';
import { Container } from '../Components/container';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>Hi</FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 5px;
`;

const FooterContainer = styled(Container)`
  display: grid;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, max-content);
    grid-template-areas: 'byline byline' 'team-members project-info';
    grid-row-gap: ${spacing.sm};
  }
`;
