export type Transition = {
    from: string
    to: string
    condition: string
}

// Finite State Machine
class Fsm {
    states: any[];
    transitions: Transition[];
    currentState: any;

    constructor(states: any[], transitions: Transition[]) {
        this.states = states;
        this.transitions = transitions;
        this.currentState = states[0];
    }

    init(state: any) {
        this.currentState = state;
    }

    handleTransition({ action }: { action: string }) {
        // Based on the current state and the action, find the next state (to)
        for (const transition of this.transitions) {
            if (transition.from === this.currentState && transition.condition === action) {
                this.currentState = transition.to;
                break;
            }
        }
    }

    getCurrentState() {
        return this.currentState;
    }
}

export default Fsm;
