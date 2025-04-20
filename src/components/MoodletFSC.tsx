import { Transition } from "../utils/Fsm";
import Moodlet from "./Moodlet";

function MoodletFSC({ displayType, buttonSize }: { displayType: string, buttonSize: string }) {
    if (!validDisplayTypes.includes(displayType)) {
        throw new Error(`Invalid display type: ${displayType}`)
    }

    return (
        <Moodlet
            type={displayType}
            buttonSize={buttonSize}
            elements={moodletElements}
            buttonStates={buttonStates}
            buttonTransitions={buttonTransitions}
            initialState="required"
        />
    )
}

const moodletElements = [
    { name: 'FUELLING', abstract: 'F' },
    { name: 'SERVICING', abstract: 'S' },
    { name: 'CLEANING', abstract: 'C' }
]

const buttonStates = [
    { name: 'not-required', variant: 'inactive', disabled: true },
    { name: 'required', variant: 'inactive', disabled: false },
    { name: 'current', variant: 'red', disabled: false },
    { name: 'completed', variant: 'green', disabled: false }
]

const buttonTransitions: Transition[] = [
    { from: 'required', to: 'not-required', condition: 'right-click' },
    { from: 'not-required', to: 'required', condition: 'right-click' },
    { from: 'required', to: 'current', condition: 'left-click' },
    { from: 'current', to: 'completed', condition: 'left-click' },
    { from: 'completed', to: 'current', condition: 'left-click' },
    { from: 'completed', to: 'required', condition: 'right-click' },
]

const validDisplayTypes = ["letter", "word"]

export default MoodletFSC;
