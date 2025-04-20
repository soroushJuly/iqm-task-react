import { describe, expect, it } from '@jest/globals';
import Fsm from '../Fsm';
import { Transition } from '../Fsm';

describe('Fsm', () => {
    const testStates = ['state1', 'state2', 'state3'];
    const testTransitions: Transition[] = [
        { from: 'state1', to: 'state2', condition: 'action1' },
        { from: 'state2', to: 'state3', condition: 'action2' },
        { from: 'state3', to: 'state1', condition: 'action3' }
    ];

    describe('Initialization', () => {
        it('should initialize with first state by default', () => {
            const fsm = new Fsm(testStates, testTransitions);
            expect(fsm.getCurrentState()).toBe('state1');
        });

        it('should initialize with provided state', () => {
            const fsm = new Fsm(testStates, testTransitions);
            fsm.init('state2');
            expect(fsm.getCurrentState()).toBe('state2');
        });
    });

    describe('State Transitions', () => {
        it('should transition to next state on valid action', () => {
            const fsm = new Fsm(testStates, testTransitions);

            fsm.handleTransition({ action: 'action1' });
            expect(fsm.getCurrentState()).toBe('state2');

            fsm.handleTransition({ action: 'action2' });
            expect(fsm.getCurrentState()).toBe('state3');
        });

        it('should not change state on invalid action', () => {
            const fsm = new Fsm(testStates, testTransitions);

            fsm.handleTransition({ action: 'invalid_action' });
            expect(fsm.getCurrentState()).toBe('state1');
        });
    });

    describe('Edge Cases', () => {
        it('should handle empty states array', () => {
            const fsm = new Fsm([], []);
            expect(fsm.getCurrentState()).toBeUndefined();
        });

        it('should handle empty transitions array', () => {
            const fsm = new Fsm(testStates, []);
            fsm.handleTransition({ action: 'any_action' });
            expect(fsm.getCurrentState()).toBe('state1');
        });
    });
}); 