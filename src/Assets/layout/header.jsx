import React from 'react';
import styled from 'styled-components';
import spacing from '../Components/spacing';
import { Container } from '../Components/container';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>It Worked!</HeaderContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  margin-top: 0;
  padding: 5px;
`;

const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: ${spacing.lg};
  grid-column-gap: ${spacing.xl};
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: ${spacing.sm};
  }
`;
