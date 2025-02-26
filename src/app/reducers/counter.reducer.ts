import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../state/counter/counter.actions';

const initialState: number = Number(sessionStorage.getItem('counter')) || 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    const newState = state + 1;
    sessionStorage.setItem('counter', newState.toString()); 
    return newState;
  }),
  on(decrement, (state) => {
    const newState = state > 0 ? state - 1 : 0; 
    sessionStorage.setItem('counter', newState.toString());
    return newState;
  })
);
