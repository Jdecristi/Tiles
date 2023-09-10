import Styled from "styled-components";
import "./index.css";
import Game from "./components/Game";
import { useState } from "react";
import IntroModal from "./components/IntroModal";

const StyledApp = Styled.div`
    background: radial-gradient(circle, hsl(0, 0%, 0%),  hsl(241.15384615384616, 96.29629629629628%, 10.588235294117649%));
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;

const App: React.FC = () => {
  const [introModalOpen, setIntroModalOpen] = useState<boolean>(true);

  return (
    <StyledApp id="app">
      {introModalOpen ? (
        <IntroModal onClose={() => setIntroModalOpen(false)} />
      ) : (
        <Game />
      )}
    </StyledApp>
  );
};

export default App;
