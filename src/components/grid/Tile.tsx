import { useState } from "react";
import Styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";

type tile = {
  id: number;
  clicked: boolean;
  color: { c: string; p: string };
  chosenTile: boolean;
};

interface Props {
  tileSize: number;
  tile: tile;
  clickable: boolean;
  tileClicked: (tile: tile, isCorrect: boolean, newtileColor: string) => void;
}

export const Tile: React.FC<Props> = ({
  tileSize,
  tile,
  clickable,
  tileClicked,
}) => {
  //State
  let [tileColor, setTileColor] = useState<{ c: string; p: string }>({
    c: tile.color.c,
    p: tile.color.p,
  });
  let [clicked, setClicked] = useState<boolean>(tile.clicked);

  //Functions
  let handleClick = (tile: tile) => {
    if (!clickable) return;
    if (clicked) return;

    let isCorrect = tile.chosenTile ? true : false;
    const newtileColor = isCorrect ? "#02FF62" : "#FF0000";
    tileClicked(tile, isCorrect, newtileColor);

    setTileColor({ c: newtileColor, p: tile.color.c });
    setClicked(true);
  };

  //Styles
  const ChangeColor = keyframes`
        from {background-color: ${tileColor.p};}
        to   {backgroundColor: ${tileColor.c};}
    `;

  const StyledTile = Styled.button`
        border-radius: ${(props: { size: number; color: string }) =>
          props.size / 20}vw;
        background-color: ${(props: { size: number; color: string }) =>
          props.color};
        border: none;
        animation: ${ChangeColor} 100ms ease-in-out;
    `;

  return (
    <StyledTile
      size={tileSize}
      color={tileColor.c}
      onClick={() => handleClick(tile)}
    >
      {tileColor.c === "#02FF62" && clicked ? (
        <Icon icon="mingcute:check-fill" color="#000000" width="2.5em" />
      ) : null}
      {tileColor.c === "#FF0000" ? (
        <Icon icon="iconamoon:close-duotone" color="#000000" width="3.5em" />
      ) : null}
    </StyledTile>
  );
};
export default Tile;
