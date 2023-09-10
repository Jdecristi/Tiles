import { useState, useEffect } from "react";

//Styles
import Styled from "styled-components";

type Score = {
  level: number;
  tiles: number;
};

interface Props {
  level: number;
  score: number;
  restartGame: () => void;
}

const GameOver: React.FC<Props> = ({ level, score, restartGame }) => {
  const [scores, setScores] = useState<Score[]>(
    JSON.parse(localStorage.getItem("tilesScores") || "[]")
  );
  const [currentScore] = useState<Score>({ level: level, tiles: score });

  useEffect(() => {
    addNewScore();
  }, []);

  const addNewScore = () => {
    if (scores.length > 0) {
      sortScores();
    } else {
      localStorage.setItem("tilesScores", JSON.stringify([currentScore]));
      setScores([currentScore]);
    }
  };

  const sortScores = () => {
    const hasCurrent = scores.find(
      (score: Score) => score.tiles === currentScore.tiles
    )
      ? true
      : false;

    if (!hasCurrent) {
      let newScores = scores;
      newScores.push(currentScore);
      newScores.sort(function (a: { tiles: number }, b: { tiles: number }) {
        return b.tiles - a.tiles;
      });
      newScores = newScores.slice(0, 5);

      if (
        !newScores.find((score: Score) => score.tiles === currentScore.tiles)
      ) {
        newScores.pop();
        newScores.push(currentScore);
      }

      localStorage.setItem("tilesScores", JSON.stringify(newScores));
      setScores(newScores);
    }
  };

  const scoreColor = (score: Score) => {
    if (score.tiles === currentScore.tiles) return "#ffffff";
  };

  const Container = Styled.div`
    font-size: ${window.innerWidth < 600 ? 7 : 3}vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const Row = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Box = Styled.div`
    height: 10em;
    width: 10em;
    background-color: #000000;
    border: 1px solid #333333;
    border-radius: 0.25em;
    position: relative;
  `;
  const H1 = Styled.div`
    font-size: .75em;
    position: absolute;
    width: 90%;
    text-align: center;
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
  `;

  const List = Styled.div`
    width: 100%;
    height: 6.25em;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  `;

  const Item = Styled.div`
    width: 85%;
    padding: .25em;
    margin: .1em auto;
    background-color: #555555;
    border: 1px solid ${(props) => props.color};
    border-radius: .125em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const Span = Styled.div`
    font-size: .5em;
    margin: 0 .5em;
    padding: 0;
    color: #ffffff;
  `;
  const Button = Styled.button`
    font-size: 1em;
    width: 4em;
    margin: .5em;
    padding: .25em;
    background-color: #555555;
    border: none;
    border-radius: .25em;
  `;

  return (
    <Container>
      <Row>
        {scores.length ? (
          <Box>
            <H1>
              {scores.indexOf(currentScore) === 0
                ? "New High Score!"
                : "High Scores"}
            </H1>
            <List>
              {scores.map((score: Score) => {
                return (
                  <Item key={scores.indexOf(score)} color={scoreColor(score)}>
                    {score.tiles === currentScore.tiles && (
                      <Span
                        color={scoreColor(score)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: ".5em",
                          transform: "translateY(-50%)",
                          fontSize: "0.25em",
                        }}
                      >
                        Current Score!
                      </Span>
                    )}
                    <Span>Level: {score.level}</Span>
                    <Span>{score.tiles} Tiles</Span>
                  </Item>
                );
              })}
            </List>
          </Box>
        ) : null}
      </Row>
      <Row>
        <Button onClick={restartGame}>
          <Span>Play Again</Span>
        </Button>
      </Row>
    </Container>
  );
};

export default GameOver;
