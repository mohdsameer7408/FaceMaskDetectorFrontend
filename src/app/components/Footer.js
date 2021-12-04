import styled, { css } from "styled-components";
import { IconButton } from "@mui/material";
import { Videocam, VideocamOff } from "@mui/icons-material";

function Footer({ isVideoOn, setIsVideoOn }) {
  const videoHandler = (event) => {
    event.preventDefault();
    setIsVideoOn((prevState) => !prevState);
  };

  return (
    <FooterContainer>
      <IconButton onClick={videoHandler}>
        {isVideoOn ? <StyledVideocamOff /> : <StyledVideocam />}
      </IconButton>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  height: 60px;
  background-color: var(--primaryColor);
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

const StyledIcon = css`
  font-size: 3.5rem !important;
`;

const StyledVideocam = styled(Videocam)`
  ${StyledIcon}
`;

const StyledVideocamOff = styled(VideocamOff)`
  ${StyledIcon}
  color: var(--errorColor);
`;
