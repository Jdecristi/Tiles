import React from "react";
import Tile from "./Tile";

//Styles
import Styled from "styled-components";

type tile = {
  id: number;
  clicked: boolean;
  color: { c: string; p: string };
  chosenTile: boolean;
};

interface Props {
  level: number;
  endRound: (correctCount: number) => void;
}
interface State {
  tiles: tile[];
  gameStarted: boolean;
  clickable: boolean;
  chosenTilesCount: number;
}

class TileBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      tiles: [],
      gameStarted: false,
      clickable: false,
      chosenTilesCount: props.level + 4,
    };
  }

  //Global variables
  tiles: tile[] = [];
  clickCount = 0;
  count = 0;
  correct = 0;
  columns = "";
  rows = "";
  gridSize = window.innerWidth < 600 ? 80 : 35;

  buildGrid = () => {
    const { chosenTilesCount } = this.state;
    this.count = Math.round(Math.sqrt(chosenTilesCount * 3));

    let id = 0;
    let chosenTiles = 0;
    let totalTiles = this.count * this.count;

    //Columns and Rows
    for (let i = 0; i < this.count; i++) {
      this.columns += " 1fr";
      this.rows += " 1fr";
    }

    //Populate the Grid
    for (let i = 0; i < totalTiles; i++) {
      let chosenTile = false;
      if (
        (Math.random() <= 0.35 && chosenTiles < chosenTilesCount) ||
        chosenTilesCount - chosenTiles >= totalTiles - i
      ) {
        chosenTile = true;
        chosenTiles++;
      }

      let tile = {
        id: i,
        clicked: false,
        color: chosenTile
          ? { c: "#ffffff", p: "#ffffff" }
          : { c: "#555555", p: "#555555" },
        previousColor: chosenTile ? "#ffffff" : "#555555",
        chosenTile: chosenTile,
      };

      this.tiles.push(tile);
    }
    this.setState({
      tiles: this.tiles,
      gameStarted: true,
    });
  };
  startGame = () => {
    setTimeout(() => {
      const { tiles } = this.state;
      let newTiles = tiles.map((tile: tile) => {
        tile.color = { c: "#555555", p: tile.color.c };
        return tile;
      });

      this.setState({
        tiles: newTiles,
        clickable: true,
      });
    }, 1000);
  };

  componentDidMount() {
    this.buildGrid();
    this.startGame();
  }

  tileClicked = (tile: tile, isCorrect: boolean, color: string) => {
    const { tiles, chosenTilesCount } = this.state;

    this.clickCount++;
    if (isCorrect) this.correct++;

    this.tiles = tiles.map((t: tile) => {
      if (t.id === tile.id) {
        t.clicked = true;
        t.color = { c: color, p: t.color.c };
      }

      return t;
    });

    if (this.clickCount === chosenTilesCount) {
      this.endGame();
    }
  };
  endGame = () => {
    const { endRound } = this.props;

    this.tiles.forEach((t: tile) => {
      if (t.chosenTile && t.clicked !== true) {
        t.clicked = true;
        t.color = { c: "#ffffff", p: t.color.c };
      }

      return t;
    });

    this.setState({ tiles: this.tiles, clickable: false });

    setTimeout(() => {
      endRound(this.correct);
    }, 1000);
  };

  render() {
    const { tiles, clickable } = this.state;

    //Styles
    const Grid = Styled.div`
        font-size: ${this.gridSize}vw;
        width: 1em;
        height: 1em; 
        padding: ${1 / this.count / 7.5}em;
        background-color: #000000;
        border: 1px solid #333333;
        border-radius: 0.025em;
        display: grid;
        grid-template-columns: ${this.columns};
        grid-template-rows: ${this.rows};
        grid-gap: ${1 / this.count / 20}em;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    return (
      <Grid>
        {tiles.map((tile) => (
          <Tile
            tile={tile}
            tileSize={this.gridSize / this.count}
            key={tile.id}
            clickable={clickable}
            tileClicked={this.tileClicked}
          />
        ))}
      </Grid>
    );
  }
}
export default TileBoard;
