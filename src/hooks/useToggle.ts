import { useState } from 'react';

export type InitialType = string | boolean | number;

export function useToggle(
  initialValue: InitialType,
  options: [InitialType, InitialType]
) {
  const [state, setState] = useState<InitialType>(initialValue);

  const handleToggle = () =>
    setState((current: InitialType) =>
      current === options[0] ? options[1] : options[0]
    );

  const toggle = (value: InitialType | undefined) =>
    typeof value !== 'undefined' ? setState(value) : handleToggle();

  return [state, toggle] as [
    InitialType,
    (value: InitialType | undefined) => void
  ];
}

export function useBoolToggle(initialValue = false) {
  return useToggle(initialValue, [true, false]);
}
