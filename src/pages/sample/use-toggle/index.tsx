import { Button } from 'antd';
import React from 'react';

import { useToggle } from '@/hooks/useToggle';

const UseToggle = () => {
  const [state, toggle] = useToggle('chicken', ['chicken', 'dead-chicken']);

  return (
    <div>
      <h2>{state}</h2>
      <Button onClick={() => toggle(undefined)}>Toggle By Undefined</Button>
      <Button onClick={() => toggle('dead-chicken')}>Toggle By Value</Button>
    </div>
  );
};

export default UseToggle;
