import Styled, { keyframes } from "styled-components";
import type { FC } from "react";

type IntroModalProps = {
  onClose: () => void;
};

const StyledModal = Styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 70%;
  max-width: 500px;
  transform: translateX(-50%);
  padding: 25px;
  background-color: #000000;
  border: 1px solid #333333;
  border-radius: 0.25rem;
  display: flex;
  gap: 25px;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Button = Styled.button`
  font-size: 1em;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: #FFFFFF;
  border: none;
  border-radius: .25em;
  cursor: pointer;
`;

const Text = Styled.p`
  color: #cccccc;
  line-height: 1.5rem;
`;

const Green = Styled.span`
  color: #02FF62;
`;
const Red = Styled.span`
  color: #FF0000;
`;

const IntroModal: FC<IntroModalProps> = ({ onClose }) => {
  return (
    <StyledModal>
      <div>
        <Text>
          <b>"Tiles"</b> is a memory game where your task is to remember which
          tiles light up and then click on them. If you click the correct tile,
          it will turn <Green>green</Green>. If your choice is incorrect, the
          tile will turn <Red>red</Red>.
        </Text>
        <Text>
          See how good you memory is by clicking <b>"Play Game"</b>!
        </Text>
      </div>
      <Button onClick={onClose}>Play Game</Button>
    </StyledModal>
  );
};

export default IntroModal;
