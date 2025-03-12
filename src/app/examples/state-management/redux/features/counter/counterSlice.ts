import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice: Slice<CounterState> = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number | void>) => {
      const amount = action.payload !== undefined ? action.payload : 1;
      state.value += amount;
    },
    decrement: (state, action: PayloadAction<number | void>) => {
      const amount = action.payload !== undefined ? action.payload : 1;
      state.value -= amount;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer; 
