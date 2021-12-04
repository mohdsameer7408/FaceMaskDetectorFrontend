import styled, { css } from "styled-components";
import WebCam from "react-webcam";
import { VideocamOff } from "@mui/icons-material";

function HomeScreen({ isVideoOn }) {
  return (
    <HomeScreenContainer>
      <DetectionSection>
        {isVideoOn ? (
          <StyledWebCam />
        ) : (
          <VideoOff>
            <VideocamOffIcon />
          </VideoOff>
        )}
        <StatusBar>Mask Not Detected</StatusBar>
      </DetectionSection>
    </HomeScreenContainer>
  );
}

export default HomeScreen;

const HomeScreenContainer = styled.section`
  display: flex;
  flex-direction: Column;
  min-height: calc(100vh - 120px);
`;

const DetectionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: auto;
  align-items: Center;
`;

const StyledVideo = css`
  display: flex;
  width: 700px;
  height: 400px;
  background-color: #81b1b4;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledWebCam = styled(WebCam)`
  ${StyledVideo}
`;

const VideoOff = styled.div`
  ${StyledVideo}
  justify-content: center;
  align-items: center;
`;

const VideocamOffIcon = styled(VideocamOff)`
  font-size: 5rem !important;
`;

const StatusBar = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 700px;
  border: 3px solid #000;
  border-radius: 5px;
`;
