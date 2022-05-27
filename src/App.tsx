//Styles
import Styled from 'styled-components';

//Components
import Game from './components/Game';
import { useEffect } from 'react';

const App: React.FC = () => {
  const StyledApp = Styled.div`
    background: radial-gradient(circle, hsl(0, 0%, 0%),  hsl(0, 0%, 20%));
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;

  useEffect(() => {
    // createTiles();
  }, [])

    return (
      <StyledApp id="app">
        <Game />
      </StyledApp>
    )
}

export default App;