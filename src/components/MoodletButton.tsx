import Fsm from "../utils/Fsm"
import BaseButton from "./base/BaseButton";
import { useState, useRef } from "react";

type MoodletButtonProps = {
    title: string
    buttonStates: any[]
    buttonTransitions: any[]
    initialState?: any
    buttonSize?: string
}

function MoodletButton({ title, buttonStates, buttonTransitions, initialState, buttonSize }: MoodletButtonProps) {
    const [currentState, setCurrentState] = useState(initialState || buttonStates[0]);
    const fsmRef = useRef(new Fsm(buttonStates, buttonTransitions));

    // Initialize FSM
    fsmRef.current.init(currentState);

    const handleLeftClick = () => {
        fsmRef.current.handleTransition({ action: "left-click" });
        setCurrentState(fsmRef.current.getCurrentState());
    }

    const handleRightClick = () => {
        fsmRef.current.handleTransition({ action: "right-click" });
        setCurrentState(fsmRef.current.getCurrentState());
    }

    return (
        <div>
            <BaseButton
                title={title}
                variant={buttonStates.find(buttonState => buttonState.name === currentState)?.variant}
                disabled={buttonStates.find(buttonState => buttonState.name === currentState)?.disabled}
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
                buttonSize={buttonSize} />
        </div>
    )
}

export default MoodletButton;
