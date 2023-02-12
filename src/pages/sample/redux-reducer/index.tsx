import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppState } from '@/configs/redux';
import { decrement, increment } from '@/reducers/counter';

const ReduxReducer = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: AppState) => state.counter);
  return (
    <div>
      <p>Counter: {counter.value}</p>
      <Button onClick={() => dispatch(increment())}>Increment by one</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement by one</Button>
    </div>
  );
};

export default ReduxReducer;
