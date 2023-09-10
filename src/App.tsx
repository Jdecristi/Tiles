//Styles
import Styled from "styled-components";
import "./index.css";

//Components
import Game from "./components/Game";

const App: React.FC = () => {
  const StyledApp = Styled.div`
    background: radial-gradient(circle, hsl(0, 0%, 0%),  hsl(241.15384615384616, 96.29629629629628%, 10.588235294117649%));
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;

  return (
    <StyledApp id="app">
      <Game />
    </StyledApp>
  );
};

export default App;
