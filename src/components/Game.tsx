import React from "react";

//components
import CountDown from "./CountDown";
import GameOver from "./GameOver";
import TileBoard from "./grid/TileBoard";
import { createTiles, removeTiles } from "./floating-tiles/FloatingTiles";

//Styles
import Styled, { keyframes } from "styled-components";

class Game extends React.Component {
  state = {
    showText: false,
    showBoard: false,
    showCountDown: false,
    showGameOver: false,
    level: 1,
    score: 0,
  };

  componentDidMount() {
    this.setGame();
  }

  setGame = () => {
    this.setState({
      showText: true,
      showBoard: false,
      showCountDown: false,
      showGameOver: false,
      level: 1,
      score: 0,
    });
    setTimeout(() => {
      this.startGame();
    }, 2000);
  };

  startGame = () => {
    createTiles();
    this.setState({
      showText: false,
    });

    setTimeout(() => {
      this.setState({
        showCountDown: true,
      });
    }, 1000);
  };

  startRound = () => {
    this.setState({ showCountDown: false, showBoard: true });
  };

  endRound = (correctCount: number) => {
    let { score, level } = this.state;

    if (correctCount === level + 4) {
      this.setState({
        showBoard: false,
        showCountDown: true,
        level: level + 1,
        score: score + correctCount,
      });
    } else {
      this.setState({
        showBoard: false,
        showGameOver: true,
        score: score + correctCount,
      });
    }
  };

  restartGame = () => {
    removeTiles();
    this.setState({ showGameOver: false });

    setTimeout(() => {
      this.setGame();
    }, 2000);
  };

  render() {
    const { showText, showCountDown, showBoard, showGameOver, level, score } =
      this.state;
    const { startRound, endRound } = this;

    const Game = Styled.div`
      z-index: 1;
    `;

    //Styles
    const fade = keyframes`
      0%       { opacity: 0;}
      25%, 75% { opacity: 1;}
      100%     { opacity: 0;}
    `;

    const H1 = Styled.h1`
      font-size: 5vw;
      color: #ffffff;
      position: fixed;
      top: 45vh;
      left: 50vw;
      transform: translate(-50%,-50%);
      animation: ${fade} 2000ms ease-in-out;
    `;

    return (
      <Game>
        {showText && <H1>Remember The Tiles</H1>}
        {showCountDown && <CountDown startGame={() => startRound()} />}
        {showBoard && <TileBoard level={level} endRound={endRound} />}
        {showGameOver && (
          <GameOver
            score={score}
            level={level}
            restartGame={this.restartGame}
          />
        )}
      </Game>
    );
  }
}

export default Game;
