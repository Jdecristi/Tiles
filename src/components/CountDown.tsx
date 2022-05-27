import { useState, useEffect } from 'react';

//Styles
import Styled, {keyframes} from 'styled-components';

interface Props {
    startGame: () => void;
}

const CountDown: React.FC <Props> = ({startGame}) => {
    //State 
    let [timer, setTimer] = useState(3)

    let decriment = () => {
        if(timer === 0){
            startGame();
        } else {
            setTimeout(() =>{
                setTimer(timer - 1)
            }, 1000)
        }
    }

    useEffect(() => {decriment()})

    //Styles
    const fadeOut = keyframes`
        from { opacity: 1;}
        to { opacity: 0;}
    `

    const StyledTimer = Styled.div`
        font-family: roboto;
        font-size: 10vw;
        line-height: 10vw;
        height: 10vw;
        width: 10vw;
        text-align: center;
        color: #ffffff;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%,-50%);
        animation: ${fadeOut} 500ms ease-in-out;
        animation-delay: 500ms;
    `;

    return(
        <StyledTimer>
            {timer >= 1 ? timer : 1}
        </StyledTimer>
    )
}

export default CountDown;