import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderText>Face Mask Detection</HeaderText>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  background-color: var(--primaryColor);
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

const HeaderText = styled.h2``;
