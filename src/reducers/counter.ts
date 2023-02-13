import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CounterInterface {
  value: number;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  } as CounterInterface,
  reducers: {
    increment: (state: CounterInterface) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
