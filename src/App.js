import { useState } from "react";
import styled from "styled-components";

import Header from "./app/components/Header";
import HomeScreen from "./app/screens/HomeScreen";
import Footer from "./app/components/Footer";

function App() {
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <AppContainer>
      <Header />
      <HomeScreen isVideoOn={isVideoOn} />
      <Footer isVideoOn={isVideoOn} setIsVideoOn={setIsVideoOn} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main``;
