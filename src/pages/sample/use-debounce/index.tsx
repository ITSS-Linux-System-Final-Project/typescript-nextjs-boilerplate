import { Input } from 'antd';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

const UseDebounce = () => {
  const [inputValue, setInputValue] = useState('');
  const value = useDebounce(inputValue, 500);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <p>Value: {value}</p> <Input onChange={handleInput} />
    </div>
  );
};

export default UseDebounce;
