import "./moodlet.css"
import MoodletButton from "./MoodletButton"

type MoodletProps = {
    type?: string
    elements: { name: string, abstract: string }[]
    buttonStates: { name: string, variant: string, disabled: boolean }[]
    buttonTransitions: { from: string, to: string, condition: string }[]
    initialState?: string
    buttonSize?: string
}

function Moodlet({ type = "letter", elements, buttonStates, buttonTransitions, initialState, buttonSize }: MoodletProps) {
    // Validate type of moodlet
    if (!validTypes.includes(type)) {
        throw new Error(`Invalid type: ${type}`)
    }


    return (
        <div className="moodlet-container">
            {elements.map((element) => (
                <MoodletButton
                    key={element.name}
                    title={type === "letter" ? element.abstract : element.name}
                    buttonStates={buttonStates}
                    buttonTransitions={buttonTransitions}
                    initialState={initialState}
                    buttonSize={buttonSize}
                />
            ))}
        </div>
    )
}

const validTypes = ["letter", "word", "icon", "ellipsis", "iconL", "iconR"]

export default Moodlet;
